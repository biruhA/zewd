import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ring Detail | ZEWD DIAMOND & JEWELRY',
  description: 'Customize your perfect engagement ring at Zewd Diamond & Jewelry.',
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
