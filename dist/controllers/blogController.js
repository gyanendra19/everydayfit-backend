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
exports.getBlog = exports.getBlogs = exports.createBlog = void 0;
const blogModel_1 = __importDefault(require("../models/blogModel"));
const createBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield blogModel_1.default.create(req.body);
    res.status(201).json({
        status: 'success'
    });
});
exports.createBlog = createBlog;
const getBlogs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allBlogs = yield blogModel_1.default.find();
    res.status(200).json({
        status: 'success',
        data: allBlogs
    });
});
exports.getBlogs = getBlogs;
const getBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { topic } = req.body;
    const blog = yield blogModel_1.default.findOne({ topic });
    res.status(200).json({
        status: "success",
        data: blog
    });
});
exports.getBlog = getBlog;
