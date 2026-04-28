import { type ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'; 

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 dark:bg-black font-sans text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <Header />
      
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;