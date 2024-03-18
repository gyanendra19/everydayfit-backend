"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const productController_1 = require("../controllers/productController");
const route = express_1.default.Router();
route.route('/createProduct').post(productController_1.createProduct);
// route.route('/getBlog').post(getBlog)
route.route('/getAllProduct').get(productController_1.getAllProduct);
exports.default = route;
