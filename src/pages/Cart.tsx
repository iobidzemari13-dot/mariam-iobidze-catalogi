import { useAppSelector, useAppDispatch } from '../store/hooks';
import { addItem, decrementItem, removeItem, clearCart } from '../store/cartSlice';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const Cart = () => {
  
  const cartItems = useAppSelector(state => state.cart.items);
  const dispatch = useAppDispatch();

  
    const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 min-h-[60vh]">
        <h2 className="text-2xl font-serif text-gray-800 dark:text-gray-100 mb-4 transition-colors duration-300">შენი კალათა ცარიელია</h2>
        <Link to="/catalog">
          <Button variant="primary">კატალოგში დაბრუნება</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 min-h-[70vh]">
      <h2 className="text-3xl font-serif text-gray-800 dark:text-white mb-8 transition-colors duration-300">შენი კალათა</h2>
      
      <div className="bg-white dark:bg-black p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 transition-colors duration-300">
        {cartItems.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center justify-between border-b border-gray-100 dark:border-gray-800 py-6 gap-4">
            
            
            <div className="flex items-center gap-4 w-full md:w-1/3">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain rounded-md bg-gray-50 dark:bg-gray-900 p-2" />
              <div>
                <h3 className="font-medium text-gray-800 dark:text-gray-200 line-clamp-2">{item.title}</h3>
                <p className="text-gray-500 font-semibold">{item.price} ₾</p>
              </div>
            </div>

            
            <div className="flex items-center gap-4">
              <button onClick={() => dispatch(decrementItem(item.id))} className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">-</button>
              <span className="font-bold w-4 text-center dark:text-white">{item.quantity}</span>
              <button onClick={() => dispatch(addItem(item))} className="w-8 h-8 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">+</button>
            </div>

            
            <div className="flex items-center justify-between w-full md:w-auto md:justify-end gap-6 md:gap-8">
              <span className="font-bold text-xl text-gray-800 dark:text-gray-100 min-w-[80px] text-right">
                {item.price * item.quantity} ₾
              </span>
              <button 
                onClick={() => dispatch(removeItem(item.id))} 
                className="text-rose-500 hover:text-rose-700 transition-colors text-sm font-medium"
              >
                წაშლა
              </button>
            </div>
            
          </div>
        ))}

        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
          <button 
            onClick={() => dispatch(clearCart())} 
            className="text-gray-400 hover:text-gray-600 underline text-sm transition-colors"
          >
            კალათის გასუფთავება
          </button>
          
          <div className="text-right flex flex-col items-end">
            <p className="text-gray-500 mb-1">სულ გადასახდელი:</p>
            <p className="text-3xl font-bold text-primary dark:text-gray-100 mb-6">{totalPrice} ₾</p>
            <Button variant="primary">ყიდვის დასრულება</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;