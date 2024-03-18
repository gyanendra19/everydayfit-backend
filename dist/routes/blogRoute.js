"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const blogController_1 = require("../controllers/blogController");
const route = express_1.default.Router();
route.route('/createBlog').post(blogController_1.createBlog);
route.route('/getBlog').post(blogController_1.getBlog);
route.route('/getAllBlogs').get(blogController_1.getBlogs);
exports.default = route;
