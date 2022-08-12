export function showAllEnv(
	currentEnv: 'browser' | 'server',
	currentVercelEnv: string | null
) {
	const check = (
		env: 'browser' | 'server',
		vercelEnv: 'vercel' | 'production' | 'preview' | 'local' | null,
		value: string | undefined,
		shouldBe?: string
	) => {
		const matchingVercelEnv =
			vercelEnv === (currentVercelEnv ?? 'local') ||
			(vercelEnv === 'vercel' && !!currentVercelEnv) ||
			!vercelEnv

		const matchingEnv = env === 'browser' || currentEnv === env

		const requireValue = matchingEnv && matchingVercelEnv

		return {
			value: value ?? '-',
			vercel: vercelEnv ?? '',
			expect: env,
			correct:
				requireValue && value
					? value === (shouldBe ?? value)
						? '✅ valid'
						: `❌ invalid: should be ${shouldBe}`
					: requireValue && !value
					? '❌ should be set'
					: !requireValue && value
					? '❌ should not be set'
					: '❎ missing (valid)',
		}
	}
	return {
		NEXT_RUNTIME: check('server', null, process.env.NEXT_RUNTIME),
		NODE_ENV: check('browser', null, process.env.NODE_ENV),
		VERCEL_ENV: check('server', 'vercel', process.env.VERCEL_ENV),
		SOURCE_FILE: check(
			'server',
			null,
			process.env.SOURCE_FILE,
			`.env.${currentVercelEnv ?? 'local'}`
		),
		NEXT_PUBLIC_SOURCE_FILE: check(
			'browser',
			null,
			process.env.NEXT_PUBLIC_SOURCE_FILE,
			`.env.${currentVercelEnv ?? 'local'}`
		),
		ONLY_IN_DOT_ENV: check('server', null, process.env.ONLY_IN_DOT_ENV),
		NEXT_PUBLIC_ONLY_IN_DOT_ENV: check(
			'browser',
			null,
			process.env.NEXT_PUBLIC_ONLY_IN_DOT_ENV
		),
		ONLY_IN_DOT_ENV_PRODUCTION: check(
			'server',
			'production',
			process.env.ONLY_IN_DOT_ENV_PRODUCTION
		),
		NEXT_PUBLIC_ONLY_IN_DOT_ENV_PRODUCTION: check(
			'browser',
			'production',
			process.env.NEXT_PUBLIC_ONLY_IN_DOT_ENV_PRODUCTION
		),
		ONLY_IN_DOT_ENV_PREVIEW: check(
			'server',
			'preview',
			process.env.ONLY_IN_DOT_ENV_PREVIEW
		),
		NEXT_PUBLIC_ONLY_IN_DOT_ENV_PREVIEW: check(
			'browser',
			'preview',
			process.env.NEXT_PUBLIC_ONLY_IN_DOT_ENV_PREVIEW
		),
		ONLY_IN_DOT_ENV_LOCAL: check(
			'server',
			'local',
			process.env.ONLY_IN_DOT_ENV_LOCAL
		),
		NEXT_PUBLIC_ONLY_IN_DOT_ENV_LOCAL: check(
			'browser',
			'local',
			process.env.NEXT_PUBLIC_ONLY_IN_DOT_ENV_LOCAL
		),
		ONLY_IN_DOT_NEXT_CONFIG: check(
			'browser',
			null,
			process.env.ONLY_IN_DOT_NEXT_CONFIG
		),
		NEXT_PUBLIC_ONLY_IN_DOT_NEXT_CONFIG: check(
			'browser',
			null,
			process.env.NEXT_PUBLIC_ONLY_IN_DOT_NEXT_CONFIG
		),
		FROM_VERCEL_DASHBOARD: check(
			'server',
			'vercel',
			process.env.FROM_VERCEL_DASHBOARD
		),
		NEXT_PUBLIC_FROM_VERCEL_DASHBOARD: check(
			'browser',
			'vercel',
			process.env.NEXT_PUBLIC_FROM_VERCEL_DASHBOARD
		),
	}
}

export type AllEnv = ReturnType<typeof showAllEnv>
