import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../../../src/database/Models/User'
import { UserModelI } from '../../../src/interfaces/Models'

interface Request extends NextApiRequest {
  body: UserModelI
}

export default async (req: Request, res: NextApiResponse) => {
  const { body, method } = req
  switch (method) {
    case 'POST':
      const user_passcrypt = {
        ...body,
        password: bcrypt.hashSync(body.password, 10)
      }

      const user = await (await User).create(user_passcrypt)
      console.log(user)
      const token = jwt.sign({ user }, process.env.SECRET_KEY)
      return res.status(200).json({ success: true, token })
    default:
      return res.status(405).json({ message: 'Metodo não suportado' })
  }
}
