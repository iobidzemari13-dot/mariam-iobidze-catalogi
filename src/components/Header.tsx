import { useState } from 'react'; 
import { Link } from 'react-router-dom';

const Header = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-serif text-rose-600 tracking-widest uppercase font-bold">
              Princess Jewelry
            </Link>
          </div>

          
          <nav className="hidden md:flex space-x-10">
            <Link to="/" className="text-gray-600 hover:text-rose-500 transition duration-300">მთავარი</Link>
            <Link to="/catalog" className="text-gray-600 hover:text-rose-500 transition duration-300">კატალოგი</Link>
            <Link to="/about" className="text-gray-600 hover:text-rose-500 transition duration-300">ჩემს შესახებ</Link>
            <Link to="/contact" className="text-gray-600 hover:text-rose-500 transition duration-300">კონტაქტი</Link>
          </nav>

          
          <div className="flex items-center space-x-4">
            
            <button className="text-gray-600 hover:text-rose-500 relative transition duration-300 cursor-pointer border-none bg-transparent">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-rose-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </button>

            
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* 4. ჩამოსაშლელი მენიუ მობილურისთვის (ჩანს მხოლოდ მაშინ, როცა isOpen არის true) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col px-4 pt-2 pb-4 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:bg-rose-50 hover:text-rose-500 rounded-md">მთავარი</Link>
            <Link to="/catalog" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:bg-rose-50 hover:text-rose-500 rounded-md">კატალოგი</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:bg-rose-50 hover:text-rose-500 rounded-md">ჩემს შესახებ</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-gray-600 hover:bg-rose-50 hover:text-rose-500 rounded-md">კონტაქტი</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;