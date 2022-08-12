import type { NextPage } from 'next'
import { ExamplesNav } from '../app/ExamplesNav'

const Home: NextPage = () => {
	return (
		<div style={{ padding: '1em' }}>
			<ExamplesNav />
		</div>
	)
}

export default Home
