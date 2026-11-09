import { PageShell } from '@/components/shared/PageShell';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <PageShell>{children}</PageShell>;
}
