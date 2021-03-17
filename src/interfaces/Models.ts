import { Document } from 'mongoose'

interface UserI {
  name: string
  email: string
  password: string
  description: string
  image: string
  persons: string[]
}

interface SpellI {
  name: string
  school_magic: string
  spell_level: number
  time: string
  range: string
  components: string
  duration: string
  description: string
  class_magic: string[]
}

interface UserModelI extends Document {
  name: string
  email: string
  password: string
  description: string
  image: string
  persons: string[]
}

interface SpellModelI extends Document {
  name: string
  school_magic: string
  spell_level: number
  time: string
  range: string
  components: string
  duration: string
  description: string
  class_magic: string[]
}

export type { UserI, UserModelI, SpellModelI, SpellI }
