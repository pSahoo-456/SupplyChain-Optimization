import express from 'express'
import { addProduct, updateProduct } from '../controller/product.controller.js'
import { protectRoute } from '../middleware/protectRoute.js'
const router=express.Router()

router.post('/add',protectRoute,addProduct)
router.post('/update',protectRoute,updateProduct)

export default router