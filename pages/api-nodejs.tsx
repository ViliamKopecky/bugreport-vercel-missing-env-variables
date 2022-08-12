import RenderAjaxEnvPage from './api-experimental-edge'

export default RenderAjaxEnvPage

export const getStaticProps = async () => {
	return {
		props: {
			url: '/api/nodejs',
			vercelEnv: process.env.VERCEL_ENV ?? null,
		},
	}
}
