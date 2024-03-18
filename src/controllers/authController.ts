import { NextFunction, Request, Response } from 'express';
import appError from "../utils/appError"
import User from "../models/userModel"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import {IUser} from '../models/userModel'
import { promisify } from 'util';

interface JwtPayload {
    id: string;
    iat: number
}

const signupToken = (user: IUser) => {
    const secret = process.env.JWT_SECRET as string
    return jwt.sign({id: user._id}, secret)  
} 


export const signup = async(req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user){
        return next(new appError('User already exists', 403))
    }

    const hashedPassword = await bcrypt.hash(password, 12)
    const newUser = await User.create({email, password: hashedPassword})
    const token = signupToken(newUser.toObject())

    res.status(201).json({
        status: 'success',
        token,
        data: newUser
    })
}

export const login = async(req: Request, res: Response, next: NextFunction) => {
    const {email, password} = req.body

    const user: IUser | null  = await User.findOne({email})
    if(!user){
        return next(new appError('No user with that email exists', 404))
    }

    const hashedPassword = user.password as string
    const correctPassword = await bcrypt.compare(password, hashedPassword)

    if(!correctPassword){
        return next(new appError('Wrong password, Please try again!', 404))
    }

    const token = signupToken(user.toObject())

    res.status(201).json({
        status: 'success',
        token,
        data: user
    })

}

export const protect = async(req: Request, res: Response, next: NextFunction) => {
    const {token} = req.params
    console.log(token);

    if(!token){
        return next(new appError('The user is not logged in', 404))
    }
    
    const decoded: any = (jwt.verify)(token, process.env.JWT_SECRET as string);

    const currentUser = await User.findById(decoded.id)

    if(!currentUser){
        return next(new appError('No user with that token', 404))
    }

    res.status(200).json({
        status: 'success',
        data: currentUser
    })
    
}

