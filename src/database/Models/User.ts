import mongoose, { Schema } from 'mongoose'
import connectDatabase from '..'
import { UserModelI } from '../../interfaces/Models'

async function UserModel() {
  connectDatabase()
  const UserSchema = new Schema<UserModelI>({
    name: { type: String },
    email: { type: String },
    password: { type: String },
    image: { type: String },
    persons: { type: [String] }
  })
  return mongoose.models.User || mongoose.model('User', UserSchema)
}

export default UserModel()
