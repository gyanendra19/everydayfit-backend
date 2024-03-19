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
exports.protect = exports.login = exports.signup = void 0;
const appError_1 = __importDefault(require("../utils/appError"));
const userModel_1 = __importDefault(require("../models/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const signupToken = (user) => {
    const secret = process.env.JWT_SECRET;
    return jsonwebtoken_1.default.sign({ id: user._id }, secret);
};
const signup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield userModel_1.default.findOne({ email });
    if (user) {
        return next(new appError_1.default('User already exists', 403));
    }
    const hashedPassword = yield bcryptjs_1.default.hash(password, 12);
    const newUser = yield userModel_1.default.create({ email, password: hashedPassword });
    const token = signupToken(newUser.toObject());
    res.status(201).json({
        status: 'success',
        token,
        data: newUser
    });
});
exports.signup = signup;
const login = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield userModel_1.default.findOne({ email });
    if (!user) {
        return next(new appError_1.default('No user with that email exists', 404));
    }
    const hashedPassword = user.password;
    const correctPassword = yield bcryptjs_1.default.compare(password, hashedPassword);
    if (!correctPassword) {
        return next(new appError_1.default('Wrong password, Please try again!', 404));
    }
    const token = signupToken(user.toObject());
    res.status(201).json({
        status: 'success',
        token,
        data: user
    });
});
exports.login = login;
const protect = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { token } = req.params;
    console.log(token);
    if (!token) {
        return next(new appError_1.default('The user is not logged in', 404));
    }
    const decoded = (jsonwebtoken_1.default.verify)(token, process.env.JWT_SECRET);
    const currentUser = yield userModel_1.default.findById(decoded.id);
    if (!currentUser) {
        return next(new appError_1.default('No user with that token', 404));
    }
    res.status(200).json({
        status: 'success',
        data: currentUser
    });
});
exports.protect = protect;
