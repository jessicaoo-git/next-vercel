// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

//Aqui puedo usar para definir el tipo un type o una interface la diferencia esta en que la interface se puede expandir
//a futuro. Pero si en este momento voy a usar un tipo de dato en especiífico puedo usar type
type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
