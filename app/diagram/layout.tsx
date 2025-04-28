import type { Metadata } from 'next';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { MainMenu } from '@/components/reactdev/Components/FlowingMenu/MainMenu';
export const metadata: Metadata = {
  title: 'Diagram Editor',
  description: 'Create, edit and export flow diagrams in high quality',
};

export default async function DiagramLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await currentUser();
  
  if (!user) {
    redirect('/sign-in');
  }

  return (
    <>
      <MainMenu />
      <section className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-8">
        {children}
      </section>
    </>
  );
}
