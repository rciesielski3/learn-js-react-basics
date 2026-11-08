import { PageShell } from '@/components/shared/PageShell';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageShell accent="js">{children}</PageShell>;
}
