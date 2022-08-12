/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { ExamplesNav } from './ExamplesNav'
import { AllEnv, showAllEnv } from './showAllEnv'

function EnvTable(props: { env: AllEnv }) {
	return (
		<table>
			<thead>
				<tr>
					<th>env variable</th>
					<th>value</th>
					<th>env</th>
					<th>correct</th>
				</tr>
			</thead>
			<tbody>
				{Object.entries(props.env ?? {}).map(([key, val]) => (
					<tr key={key}>
						<td>
							<code>{key}</code>
						</td>
						<td>
							<code>{val.value}</code>
						</td>
						<td>
							{val.expect} {val.vercel && <small>({val.vercel})</small>}
						</td>
						<td>{val.correct}</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export const RenderEnvPage: NextPage<{
	note?: React.ReactNode
	env: AllEnv | null
	vercelEnv: string | null
}> = (props) => {
	const [browserEnv, setBrowserEnv] = useState<null | AllEnv>(null)

	useEffect(() => {
		setBrowserEnv(showAllEnv('browser', props.vercelEnv))
	}, [props.vercelEnv])

	return (
		<div style={{ padding: '1em' }}>
			<p>
				Bugreport of missing env variables defined in <code>.env</code> files
				that work on local machine but don't on Vercel environments. Problem is
				mostly in edge runtime.
			</p>
			<p>
				Source code on Github:{' '}
				<a href="https://github.com/ViliamKopecky/bugreport-vercel-missing-env-variables">
					ViliamKopecky/bugreport-vercel-missing-env-variables
				</a>
			</p>
			<ExamplesNav />
			<hr />
			<h1>VERCEL_ENV: {props.vercelEnv || 'none'}</h1>
			{props.note}
			<hr />
			<div style={{ float: 'left', marginRight: '1em' }}>
				<h2>Server</h2>
				{props.env && <EnvTable env={props.env} />}
			</div>
			<div style={{ float: 'left', marginRight: '1em' }}>
				<h2>Browser</h2>
				{browserEnv && <EnvTable env={browserEnv} />}
			</div>
		</div>
	)
}
