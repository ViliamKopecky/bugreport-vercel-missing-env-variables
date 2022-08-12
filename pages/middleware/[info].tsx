import { GetStaticPropsContext } from 'next'
import { RenderEnvPage } from '../../app/RenderEnvPage'

export default RenderEnvPage

export const getStaticPaths = async () => {
	return {
		paths: [],
		fallback: 'blocking',
	}
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
	const env = JSON.parse(String(context.params?.info))
	return {
		props: {
			env,
			vercelEnv: process.env.VERCEL_ENV ?? null,
		},
	}
}
