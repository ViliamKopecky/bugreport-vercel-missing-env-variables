import { InferGetStaticPropsType } from 'next'
import { useEffect, useState } from 'react'
import { RenderEnvPage } from '../app/RenderEnvPage'
import { AllEnv } from '../app/showAllEnv'

export default function RenderAjaxEnvPage(
	props: InferGetStaticPropsType<typeof getStaticProps>
) {
	const [env, setEnv] = useState<null | AllEnv>(null)

	useEffect(() => {
		fetch(props.url)
			.then((res) => res.json())
			.then((env) => {
				setEnv(env)
			})
	}, [props.url])

	return (
		<>
			<RenderEnvPage
				note={
					<p>
						Fetched from <code>{props.url}</code>
					</p>
				}
				env={env}
				vercelEnv={props.vercelEnv}
			/>
		</>
	)
}

export const getStaticProps = async () => {
	return {
		props: {
			url: '/api/experimental-edge',
			vercelEnv: process.env.VERCEL_ENV ?? null,
		},
	}
}
