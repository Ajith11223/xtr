import { ReactNode } from 'react';

export const metadata = {
  title: 'Dental clinics, hospital software Company India | Dentobees Innovations LLP',
  description: 'Dentobees Innovations LLP, a leading software company in Kerala, offers the best dental clinic management software providing doctors and dental professionals with smart, efficient tools to simplify operations and drive growth.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div>
      {children}
    </div>
  );
}