import mongoose from 'mongoose'

function connectDatabase() {
  mongoose.connect(`${process.env.MONGODB_URI}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
}

export default connectDatabase
