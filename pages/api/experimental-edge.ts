// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { showAllEnv } from '../../app/showAllEnv'

export const config = {
	runtime: 'experimental-edge',
}

export default function handler() {
	return new Response(
		JSON.stringify(
			showAllEnv('server', process.env.VERCEL_ENV ?? null),
			null,
			2
		),
		{
			status: 200,
			headers: {
				'content-type': 'application/json',
			},
		}
	)
}
