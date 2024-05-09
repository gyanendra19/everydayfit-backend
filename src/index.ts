import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoute from './routes/userRoute'
import blogRoute from './routes/blogRoute'
import productRoute from './routes/productRoute'
import globalError from './controllers/errorController'
dotenv.config()


const app = express()
app.use(express.json())
app.use(cors({
    origin: 'https://everydayfit.vercel.app'
}))

const url = process.env.DATABASE as string;
const pass = process.env.PASSWORD as string
const DB = url.replace('<password>', pass)
mongoose.connect(DB).then(() => {
    console.log('Database Connected')
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://everydayfit.vercel.app/'); // Replace * with specific origins if needed
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});

app.use('/api/v1/user', userRoute)
app.use('/api/v1/blog', blogRoute)
app.use('/api/v1/product', productRoute)
app.use(globalError)

app.listen(process.env.PORT, () => {
    console.log('connected to port')
})