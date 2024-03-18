import mongoose from "mongoose"

export interface IBlog extends mongoose.Document{
    topic: String
    photo: String
    blogHead: String
    blogFirst: String
    blogSecond: String
    blogThird: String
    blogFourth: String
}

const BlogSchema = new mongoose.Schema<IBlog>({
    topic: {type: String}, 
    photo: {type: String},
    blogHead: {type: String},
    blogFirst: {type: String},
    blogSecond: {type: String},
    blogThird: {type: String},
    blogFourth: {type: String}
})

const Blog = mongoose.model<IBlog>('Blog', BlogSchema)

export default Blog