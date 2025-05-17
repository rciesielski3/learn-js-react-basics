export const deployMonitorTopics = [
  {
    id: 'vercel-deploy',
    name: 'Deploy to Vercel',
    description: 'Connect your GitHub repo to Vercel for automatic builds and preview deployments.',
    code: `1. Push to GitHub
2. Go to vercel.com → Import Git repo
3. Set environment variables if needed
4. Deploy!`,
    usage: 'Auto-deploy on push',
    result: 'Production & preview URLs per branch'
  },
  {
    id: 'env-vars',
    name: 'Manage Environment Variables',
    description:
      'Use `.env.local` for secrets locally. In Vercel, set them in project → Settings → Environment Variables.',
    code: `// .env.local
NEXT_PUBLIC_API_URL=https://api.example.com`,
    usage: 'Access via process.env.NEXT_PUBLIC_...',
    result: 'Secure environment management'
  },
  {
    id: 'logging',
    name: 'Add Logging for Monitoring',
    description:
      'Use `console.log`, `console.error`, or external services like Sentry or LogRocket to track issues.',
    code: `console.log("User logged in");
console.error("Login failed");`,
    usage: 'Debug & monitor errors',
    result: 'See logs in Vercel or 3rd-party dashboards'
  },
  {
    id: 'analytics',
    name: 'Vercel Analytics',
    description:
      'Enable Web Vitals tracking automatically on Vercel or use custom tools like PostHog, Plausible, or Google Analytics.',
    code: `// vercel.json (optional)
"analytics": true`,
    usage: 'Performance monitoring (LCP, TTFB, etc.)',
    result: 'Insights into real user experience'
  },
  {
    id: 'status-monitoring',
    name: 'Status & Uptime Monitoring',
    description:
      'Use tools like UptimeRobot, Pingdom, or Vercel’s status API to monitor your app availability.',
    code: `https://uptimerobot.com/`,
    usage: 'Get alerts for downtime',
    result: 'High reliability in production'
  }
];
