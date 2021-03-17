import mongoose, { Schema } from 'mongoose'
import connectDatabase from '..'
import { SpellModelI } from '../../interfaces/Models'

async function SpellModel() {
  connectDatabase()
  const SpellSchema = new Schema<SpellModelI>({
    name: { type: String },
    school_magic: { type: String },
    spell_level: { type: Number },
    time: { type: String },
    range: { type: String },
    components: { type: String },
    duration: { type: String },
    description: { type: String },
    class_magic: { type: [String] }
  })
  return mongoose.models.Spell || mongoose.model('Spell', SpellSchema)
}

export default SpellModel()
