import mongoose from 'mongoose'

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('MongdoDB connected')
    } catch(e) {
        console.log(e)
    }
}

export default connectDB