import { NextApiRequest, NextApiResponse } from 'next'
import { SpellModelI } from '../../../src/interfaces/Models'
import Spell from '../../../src/database/Models/Spell'

interface Request extends NextApiRequest {
  body: SpellModelI
}

export default async (req: Request, res: NextApiResponse) => {
  const { body, method } = req
  switch (method) {
    case 'POST':
      const spell = await (await Spell).create(body)
      return res.status(200).json({ success: true, spell })
    default:
      return res.status(405).json({ message: 'Metodo não suportado' })
  }
}
