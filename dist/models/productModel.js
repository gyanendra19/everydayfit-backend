"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const productSchema = new mongoose_1.default.Schema({
    productName: { type: String, required: true },
    photo: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    variety: { type: String, required: true }
});
const Product = mongoose_1.default.model('Product', productSchema);
exports.default = Product;
