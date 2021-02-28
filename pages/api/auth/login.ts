/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserI } from '../../../src/interfaces/Models'
import User from '../../../src/database/Models/User'

interface Request extends NextApiRequest {
  body: UserI
}

export default async (req: Request, res: NextApiResponse) => {
  const { body, method } = req
  switch (method) {
    case 'POST':
      const { email, password } = body
      const user: UserI = await (await User).findOne({
        email
      })
      if (!user) {
        return res.status(404).json({
          message: 'Usuário não encotrado na base de dados'
        })
      } else if (bcrypt.compareSync(password, user.password)) {
        const user_nopass: any = user
        user_nopass.password = undefined
        const token = jwt.sign({ user: user_nopass }, process.env.SECRET_KEY)
        return res.status(200).json({ success: true, token })
      } else {
        return res.status(400).json({ message: 'Usuário ou senha incorretos' })
      }
    default:
      return res.status(405).json({ message: 'Metodo não suportado' })
  }
}
