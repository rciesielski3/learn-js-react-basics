export const authExamples = [
  {
    id: 'middleware-redirect',
    name: 'Protect Route with Middleware',
    description: 'Uses Next.js middleware to redirect unauthorized users.',
    code: `// middleware.ts
export function middleware(req) {
  const isAuth = Boolean(req.cookies.get("token"));
  if (!isAuth) {
    return NextResponse.redirect("/login");
  }
}`,
    usage: `Redirects unauthenticated users from /dashboard to /login`,
    run: () => '✅ Redirect triggered if token is missing'
  },
  {
    id: 'session-token',
    name: 'Session Token Check',
    description: 'Simulates validating a session token on the server.',
    code: `function validateSession(token) {
  return token === "valid-token";
}`,
    usage: `validateSession("valid-token"); // true`,
    run: () => {
      const validateSession = (token) => token === 'valid-token';
      return validateSession('valid-token');
    }
  },
  {
    id: 'client-login-state',
    name: 'Client-side Auth State',
    description: 'Manage login state using React state or cookies.',
    code: `const [isLoggedIn, setIsLoggedIn] = useState(false);
useEffect(() => {
  const token = localStorage.getItem("token");
  setIsLoggedIn(!!token);
}, []);`,
    usage: `Displays UI based on login status`,
    run: () => '🔑 Token-based client auth logic runs on mount'
  }
];
