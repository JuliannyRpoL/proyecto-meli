import axios from 'axios';
import asyncHandler from 'express-async-handler';

import { getCategoryInfo } from './categoryController.js';
import SearchItemsLayer from '../layer-application/searchItemsLayer.js'
import ItemLayer from '../layer-application/itemLayer.js'


const getSearchedItems = asyncHandler(async(req, res) => {
    const query = req.query.q;

    if(query) {
        const url = `https://api.mercadolibre.com/sites/MLA/search?q=${query}`;

        axios.get(url)
            .then(async response => {
                const searchItems = new SearchItemsLayer(response.data);
                let categoryParam;

                if(searchItems.category.length === 0) {
                    const category = searchItems.getCategoryMostSearched();
                    const categoryInfo = await getCategoryInfo(category);
                    categoryParam = categoryInfo
                } else{
                    categoryParam = searchItems.category[0]
                }
                const result = searchItems.getResult(categoryParam);

                res.status(200).json(result)
            })
            .catch(error => {
                console.log(error);
            });
    } else {
        res.status(400).json({message: 'bad request, ingrese query'})
    }
})


const getItemDetails = asyncHandler(async(req, res) => {
    const id = req.params.id;
    if(id) {
        const urlItem = `https://api.mercadolibre.com/items/${id}`;
        const urlDescription = `https://api.mercadolibre.com/items/${id}/description`;

        const item = await (await axios.get(urlItem)).data;
        const description = await (await axios.get(urlDescription)).data;
        const categoryInfo = await getCategoryInfo(item.category_id);

        const itemLayer = new ItemLayer();
        const result = itemLayer.getResult(item, description, categoryInfo);

        res.status(200).json(result)
    } else {
        res.status(400).json({message: 'bad request, ingrese id del item'})
    }
})

export { getSearchedItems, getItemDetails }