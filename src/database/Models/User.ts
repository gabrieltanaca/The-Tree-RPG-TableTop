import mongoose, { Document, Schema } from 'mongoose'
import connectDatabase from '..'
import { UserI } from '../../interfaces/Models'

async function UserModel() {
  connectDatabase()
  const UserSchema = new Schema<Document<UserI>>({
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
