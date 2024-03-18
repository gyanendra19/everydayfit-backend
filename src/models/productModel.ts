import mongoose from "mongoose";

export interface IProduct extends mongoose.Document{
    productName: string,
    photo: String
    price: number,
    description: String,
    variety: String
}

const productSchema = new mongoose.Schema<IProduct>({
    productName: {type: String, required: true},
    photo: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    variety: {type: String, required: true}
})

const Product = mongoose.model<IProduct>('Product', productSchema)

export default Product