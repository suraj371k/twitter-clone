import mongoose from "mongoose";

const connectDb = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongodb connectedd!!"))
    .catch(() => console.log("Failed to connect mongodb"))
}

export default connectDb;