export const middlewareExamples = [
  {
    id: 'basic-middleware',
    name: 'Basic Middleware Setup',
    description:
      'Create a `middleware.ts` file at the root of your app to run logic on every request.',
    code: `// middleware.ts
import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("Middleware triggered");
  return NextResponse.next();
}`,
    usage: 'Runs for all routes unless filtered',
    result: 'Logs and allows request to proceed'
  },
  {
    id: 'redirect',
    name: 'Redirect Example',
    description: 'Use middleware to conditionally redirect based on cookies, path, headers, etc.',
    code: `// middleware.ts
import { NextResponse } from "next/server";

export function middleware(request) {
  const loggedIn = false; // mock
  if (!loggedIn && request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}`,
    usage: 'Redirects unauthenticated users',
    result: 'Dashboard → Login'
  },
  {
    id: 'rewrite',
    name: 'URL Rewrite',
    description:
      'Rewrite a route to serve content from a different path without changing the visible URL.',
    code: `export function middleware(request) {
  if (request.nextUrl.pathname === "/docs") {
    return NextResponse.rewrite(new URL("/docs/index.html", request.url));
  }
  return NextResponse.next();
}`,
    usage: '/docs → /docs/index.html',
    result: 'URL stays /docs, content from index.html'
  },
  {
    id: 'headers',
    name: 'Set Headers in Middleware',
    description: 'Modify response headers dynamically from the middleware.',
    code: `export function middleware(request) {
  const response = NextResponse.next();
  response.headers.set("x-powered-by", "middleware");
  return response;
}`,
    usage: 'Add custom headers for logging or control',
    result: 'Header: x-powered-by: middleware'
  },
  {
    id: 'matcher',
    name: 'Middleware Matchers',
    description: 'Control where middleware runs using the `matcher` config in `middleware.ts`.',
    code: `export const config = {
  matcher: ["/dashboard/:path*", "/admin"]
};`,
    usage: 'Only runs on matched paths',
    result: 'Scoped execution'
  }
];
