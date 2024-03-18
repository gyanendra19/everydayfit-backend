"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BlogSchema = new mongoose_1.default.Schema({
    topic: { type: String },
    photo: { type: String },
    blogHead: { type: String },
    blogFirst: { type: String },
    blogSecond: { type: String },
    blogThird: { type: String },
    blogFourth: { type: String }
});
const Blog = mongoose_1.default.model('Blog', BlogSchema);
exports.default = Blog;
