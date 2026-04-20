import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ring Detail | THE ATELIER',
  description: 'Customize your perfect engagement ring at The Atelier.',
};

export default function RingDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`
        footer { display: none !important; }
      `}</style>
      {children}
    </>
  );
}
