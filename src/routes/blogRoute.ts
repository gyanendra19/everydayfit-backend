import express from 'express'
import { createBlog, getBlog, getBlogs } from '../controllers/blogController'

const route = express.Router()
route.route('/createBlog').post(createBlog)
route.route('/getBlog').post(getBlog)
route.route('/getAllBlogs').get(getBlogs)

export default route