"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProduct = exports.getAllProduct = exports.createProduct = void 0;
const productModel_1 = __importDefault(require("../models/productModel"));
const createProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newProduct = yield productModel_1.default.create(req.body);
    res.status(201).json({
        status: "success",
        data: newProduct
    });
});
exports.createProduct = createProduct;
const getAllProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allProducts = yield productModel_1.default.find();
    res.status(201).json({
        status: "success",
        length: allProducts.length,
        data: allProducts
    });
});
exports.getAllProduct = getAllProduct;
const getProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { productName } = req.body;
    const product = yield productModel_1.default.findOne({ productName });
    res.status(201).json({
        status: "success",
        data: product
    });
});
exports.getProduct = getProduct;
