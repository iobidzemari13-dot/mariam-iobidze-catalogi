import Header from '../components/Header';
import Footer from '../components/Footer'; 

interface MainLayoutProps {
  children: any;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-stone-50 font-sans text-gray-800">
      <Header />
      
      <main className="flex-grow flex flex-col">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;