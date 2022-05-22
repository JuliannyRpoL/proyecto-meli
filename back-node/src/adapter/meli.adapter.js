import axios from 'axios';

import { URL_MELI } from '../../config/config.js'

import ItemModel from '../models/item.model.js'
import SearchItemsModel from '../models/searchItems.model.js'

export const getSearchedItemsAdapter = async function (query) {
    const url = `${URL_MELI}/sites/MLA/search?q=${query}`;
    const items = (await axios.get(url)).data

    const searchItems = new SearchItemsModel(items);

    let categoryParam;
    if(searchItems.category.length === 0) {
        const category = searchItems.getCategoryMostSearched();
        const categoryInfo = await getCategoryInfo(category);
        categoryParam = categoryInfo
    } else{
        categoryParam = searchItems.category[0]
    }

    return searchItems.getResult(categoryParam);
}

export const getItemDetailsAdapter = async function (id) {
    const urlItem = `${URL_MELI}/items/${id}`;
    const urlDescription = `${URL_MELI}/items/${id}/description`;

    const item = (await axios.get(urlItem)).data;
    const description = (await axios.get(urlDescription)).data;
    const categoryInfo = await getCategoryInfo(item.category_id);

    const itemLayer = new ItemModel();

    return itemLayer.getResult(item, description, categoryInfo);
}

const getCategoryInfo = async function (id) {
    if(id) {
        const url = `${URL_MELI}/categories/${id}`;
        let data;

        await axios.get(url)
            .then(response => {
                data = response.data
            })
            .catch(error => {
                console.log("ERROR", error);
            });

        const categories = data.path_from_root.map((category) => category["name"])

        return categories 
    } else {
        return {message: 'bad request, ingrese id de la categoria'}
    }
}