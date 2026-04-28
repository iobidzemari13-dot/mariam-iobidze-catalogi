import { useState } from 'react'; 
import { Link, useLocation } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import ThemeToggle from './ThemeToggle';
import { useScrollTop } from '../hooks/useScrollTop';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useAppSelector(state => state.cart.items);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const isScrolled = useScrollTop(20);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`bg-white dark:bg-black sticky top-0 z-50 transition-all duration-300 border-b border-transparent dark:border-gray-800 ${isScrolled ? 'shadow-md py-0' : 'shadow-sm py-2'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-serif text-rose-600 tracking-widest uppercase font-bold">
              Princess
            </Link>
          </div>

          <nav className="hidden md:flex space-x-10">
            <Link to="/" className={`${isActive('/') ? 'text-rose-500' : 'text-gray-600 dark:text-gray-300'} hover:text-rose-500 dark:hover:text-rose-400 transition duration-300 font-medium`}>მთავარი</Link>
            <Link to="/catalog" className={`${isActive('/catalog') ? 'text-rose-500' : 'text-gray-600 dark:text-gray-300'} hover:text-rose-500 dark:hover:text-rose-400 transition duration-300 font-medium`}>კატალოგი</Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-rose-500' : 'text-gray-600 dark:text-gray-300'} hover:text-rose-500 dark:hover:text-rose-400 transition duration-300 font-medium`}>ჩემს შესახებ</Link>
            <Link to="/contact" className={`${isActive('/contact') ? 'text-rose-500' : 'text-gray-600 dark:text-gray-300'} hover:text-rose-500 dark:hover:text-rose-400 transition duration-300 font-medium`}>კონტაქტი</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            
            <Link to="/cart" className="text-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400 relative transition duration-300 cursor-pointer border-none bg-transparent block">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </Link>

            <div className="md:hidden flex items-center ml-2">
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-gray-600 dark:text-gray-300 hover:text-rose-500 dark:hover:text-rose-400 focus:outline-none transition duration-300 p-1"
                aria-label="Toggle Menu"
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100 border-t border-gray-100 dark:border-gray-800' : 'max-h-0 opacity-0'}`}
      >
        <div className="bg-white dark:bg-black shadow-lg dark:shadow-none">
          <nav className="flex flex-col px-4 pt-2 pb-4 space-y-1">
            <Link to="/" onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-md font-medium transition-colors ${isActive('/') ? 'bg-rose-50 text-rose-500 dark:bg-rose-900/20 dark:text-rose-400' : 'text-gray-600 dark:text-gray-300 hover:bg-rose-50 hover:text-rose-500 dark:hover:bg-gray-800 dark:hover:text-rose-400'}`}>მთავარი</Link>
            <Link to="/catalog" onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-md font-medium transition-colors ${isActive('/catalog') ? 'bg-rose-50 text-rose-500 dark:bg-rose-900/20 dark:text-rose-400' : 'text-gray-600 dark:text-gray-300 hover:bg-rose-50 hover:text-rose-500 dark:hover:bg-gray-800 dark:hover:text-rose-400'}`}>კატალოგი</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-md font-medium transition-colors ${isActive('/about') ? 'bg-rose-50 text-rose-500 dark:bg-rose-900/20 dark:text-rose-400' : 'text-gray-600 dark:text-gray-300 hover:bg-rose-50 hover:text-rose-500 dark:hover:bg-gray-800 dark:hover:text-rose-400'}`}>ჩემს შესახებ</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className={`block px-4 py-3 rounded-md font-medium transition-colors ${isActive('/contact') ? 'bg-rose-50 text-rose-500 dark:bg-rose-900/20 dark:text-rose-400' : 'text-gray-600 dark:text-gray-300 hover:bg-rose-50 hover:text-rose-500 dark:hover:bg-gray-800 dark:hover:text-rose-400'}`}>კონტაქტი</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;