import express from 'express'
import {createProduct, getAllProduct, getProduct} from '../controllers/productController'


const route = express.Router()
route.route('/createProduct').post(createProduct)
route.route('/getProduct').post(getProduct)
route.route('/getAllProduct').get(getAllProduct)

export default route