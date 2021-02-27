import { NextApiRequest, NextApiResponse } from 'next'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import UserPainel from '../../../../src/db/Model/UserPainel'
import { IUserDocument } from '../../../../src/utils/interfaces'

interface Request extends NextApiRequest {
  body: IUserDocument
}

export default async (req: Request, res: NextApiResponse) => {
  const { body, method } = req
  switch (method) {
    case 'POST':
      const user_passcrypt = {
        ...body,
        password: bcrypt.hashSync(body.password, 10)
      }

      const user = await (await UserPainel).create<unknown>(user_passcrypt)
      console.log(user)
      const token = jwt.sign({ user }, 'blog')
      return res.status(200).json({ success: true, token })
    default:
      return res.status(405).json({ message: 'Metodo não suportado' })
  }
}
