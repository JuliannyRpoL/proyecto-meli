import express from 'express';
import { getSearchedItems, getItemDetails } from '../controller/itemController.js';

const router = express.Router()

router.route('/').get(getSearchedItems)

router.route('/:id').get(getItemDetails)

export default router