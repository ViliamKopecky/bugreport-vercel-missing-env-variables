// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { AllEnv, showAllEnv } from '../../app/showAllEnv'

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<AllEnv>
) {
	res.status(200).json(showAllEnv('server', process.env.VERCEL_ENV ?? null))
}
