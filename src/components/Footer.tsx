import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h3 className="text-xl font-serif text-rose-600 font-bold mb-4 uppercase tracking-widest">
              Princess Jewelry
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              ხელნაკეთი სამკაულები, შექმნილი სინაზით და ყურადღებით თითოეული დეტალის მიმართ. 
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4 transition-colors duration-300">
              კონტაქტი
            </h4>
            <ul className="text-gray-500 text-sm space-y-3">
              <li>ტელ: 5 9 8 25 33 95</li>
              <li>ელ-ფოსტა: princessjewelry.com</li>
              <li>მისამართი: ქუთაისი, საქართველო</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wider mb-4 transition-colors duration-300">
              სოციალური ქსელები
            </h4>
            <div className="flex flex-col space-y-3 text-sm">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-rose-500 transition duration-300">
                Instagram
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-rose-500 transition duration-300">
                Facebook
              </a>
            </div>
          </div>

        </div>
        
        <div className="border-t border-gray-100 dark:border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center transition-colors duration-300">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Princess Jewelry. ყველა უფლება დაცულია.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0 text-sm text-gray-400">
            <Link to="/privacy" className="hover:text-rose-500 transition">
              კონფიდენციალურობა
            </Link>
            <Link to="/terms" className="hover:text-rose-500 transition">
              წესები და პირობები
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;