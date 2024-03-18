"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const blogRoute_1 = __importDefault(require("./routes/blogRoute"));
const productRoute_1 = __importDefault(require("./routes/productRoute"));
const errorController_1 = __importDefault(require("./controllers/errorController"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const url = process.env.DATABASE;
const pass = process.env.PASSWORD;
const DB = url.replace('<password>', pass);
mongoose_1.default.connect(DB).then(() => {
    console.log('Database Connected');
});
app.use('/api/v1/user', userRoute_1.default);
app.use('/api/v1/blog', blogRoute_1.default);
app.use('/api/v1/product', productRoute_1.default);
app.use(errorController_1.default);
app.listen(process.env.PORT, () => {
    console.log('connected to port');
});
