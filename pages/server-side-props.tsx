import { RenderEnvPage } from '../app/RenderEnvPage'
import { showAllEnv } from '../app/showAllEnv'

export default RenderEnvPage

export const getServerSideProps = async () => {
	return {
		props: {
			env: showAllEnv('server', process.env.VERCEL_ENV ?? null),
			vercelEnv: process.env.VERCEL_ENV ?? null,
		},
	}
}
