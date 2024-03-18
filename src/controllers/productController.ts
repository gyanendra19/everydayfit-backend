import Product from "../models/productModel";
import { NextFunction, Request, Response } from 'express';



export const createProduct = async(req: Request, res: Response, next: NextFunction) => {
    const newProduct = await Product.create(req.body)

    res.status(201).json({
        status: "success",
        data:newProduct
    })
}

export const getAllProduct = async(req: Request, res: Response, next: NextFunction) => {
    const allProducts = await Product.find()

    res.status(201).json({
        status: "success",
        length: allProducts.length,
        data:allProducts
    })
}

export const retrieveProduct = async(req: Request, res: Response, next: NextFunction) => {
    const {productName} = req.body
    const product = await Product.findOne({productName})

    res.status(201).json({
        status: "success",
        data: product
    })
}