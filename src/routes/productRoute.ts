import express from 'express'
import {createProduct, getAllProduct, retrieveProduct} from '../controllers/productController'


const route = express.Router()
route.route('/createProduct').post(createProduct)
route.route('/retrieveProduct').post(retrieveProduct)
route.route('/getAllProduct').get(getAllProduct)

export default route