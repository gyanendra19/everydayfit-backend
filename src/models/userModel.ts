import mongoose from "mongoose"

export interface IUser extends mongoose.Document{
    email: string,
    password: string,
    passwordConfirm?: String,
    photo: String
}

const userSchema = new mongoose.Schema<IUser>({
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
    },
    passwordConfirm: {
        type: String,
    },
    photo:{
        type: String
    }
}) 

const User = mongoose.model<IUser>('User', userSchema)

export default User