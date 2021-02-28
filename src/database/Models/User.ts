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
  // UserSchema.index({ title: "text", tags: "text", linhafina: "text" });
  return mongoose.models.UserPainel || mongoose.model('UserPainel', UserSchema)
}

export default UserModel()
