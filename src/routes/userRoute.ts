import express from 'express'
import { login, signup, protect } from '../controllers/authController'

const route = express.Router()

route.route('/protect/:token').get(protect)
route.route('/signup').post(signup)
route.route('/login').post(login)
export default route