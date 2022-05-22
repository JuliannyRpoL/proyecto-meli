import asyncHandler from 'express-async-handler';

import { getItemDetailsAdapter, getSearchedItemsAdapter } from '../adapter/meli.adapter.js'

const getSearchedItems = asyncHandler(async(req, res) => {
    const query = req.query.q;
    const result = await getSearchedItemsAdapter(query);
    
    res.status(200).json(result)
})


const getItemDetails = asyncHandler(async(req, res) => {
    const id = req.params.id;
    const result = await getItemDetailsAdapter(id);    

    res.status(200).json(result)
})

export { getSearchedItems, getItemDetails }