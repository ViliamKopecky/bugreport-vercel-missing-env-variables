import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { showAllEnv } from './app/showAllEnv'

export function middleware(request: NextRequest) {
	request.nextUrl.pathname = `/middleware/${encodeURIComponent(
		JSON.stringify(showAllEnv('server', process.env.VERCEL_ENV ?? null))
	)}`

	return NextResponse.rewrite(request.nextUrl)
}

export const config = {
	matcher: '/middleware',
}
