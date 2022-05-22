import express from 'express';
import { getSearchedItems, getItemDetails } from '../controller/item.controller.js';
import { checkGetItemDetails, checkSearchedItems } from '../middleware/itemMiddleware.js'

const router = express.Router()

router.get('/', checkSearchedItems, getSearchedItems);

router.get('/:id', checkGetItemDetails, getItemDetails)

export default router