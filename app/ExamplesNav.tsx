import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSyncExternalStore } from 'react'

const examples = [
	'/server-side-props',
	'/static-props',
	'/experimental-edge-server-side-props',
	'/not-found',
	'/middleware',
	'/api-nodejs',
	'/api-experimental-edge',
]

export function ExamplesNav() {
	const asPath = useRouter().asPath

	const current = useSyncExternalStore(
		() => {
			return () => {}
		},
		() => asPath,
		() => null
	)

	return (
		<ul>
			{examples.map((example) => {
				return (
					<li
						key={example}
						style={{ fontWeight: current === example ? '700' : '400' }}
					>
						<Link href={example}>{example}</Link>
					</li>
				)
			})}
		</ul>
	)
}
