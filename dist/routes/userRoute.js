"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controllers/authController");
const route = express_1.default.Router();
route.route('/protect/:token').get(authController_1.protect);
route.route('/signup').post(authController_1.signup);
route.route('/login').post(authController_1.login);
exports.default = route;
