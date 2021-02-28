import { Document } from 'mongoose'

interface UserI {
  name: string
  email: string
  password: string
  description: string
  image: string
  persons: string[]
}

interface UserModelI extends Document {
  name: string
  email: string
  password: string
  description: string
  image: string
  persons: string[]
}

export type { UserI, UserModelI }
