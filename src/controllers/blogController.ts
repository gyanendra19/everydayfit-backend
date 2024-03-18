import Blog, {IBlog} from "../models/blogModel";
import { NextFunction, Request, Response } from 'express';
import appError from "../utils/appError"


export const createBlog = async (req: Request, res: Response, next: NextFunction) => {
     await Blog.create(req.body)

    res.status(201).json({
        status: 'success'
    })
}

export const getBlogs = async (req: Request, res: Response, next: NextFunction) => {
    const allBlogs = await Blog.find()

    res.status(200).json({
        status: 'success',
        data: allBlogs
    })
}

export const getBlog = async (req: Request, res: Response, next: NextFunction) => {
    const {topic} = req.body
    const blog = await Blog.findOne({topic})

    res.status(200).json({
        status: "success",
        data: blog
    })
}

