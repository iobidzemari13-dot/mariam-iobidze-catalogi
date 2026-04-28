import { memo } from 'react';
import Button from "./Button";
import { useAppDispatch } from '../store/hooks';
import { addItem } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
  priority?: boolean;
}

const Card = memo(({ id, title, price, image, description, priority = false }: CardProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleBuyNow = () => {
    dispatch(addItem({ id, title, price, image, quantity: 1 }));
    navigate('/cart');
  };

  return (
    <div className="bg-white dark:bg-black border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:scale-105 group">
      
      <div className="relative h-64 overflow-hidden p-4">
        <img 
          src={image} 
          alt={title} 
          loading={priority ? "eager" : "lazy"} 
          decoding={priority ? "sync" : "async"}
          className="w-full h-full object-contain group-hover:scale-110 transition duration-500" 
        />
      </div>
      
      <div className="p-5 flex flex-col flex-grow items-center text-center">
        <h3 className="text-lg font-serif text-primary dark:text-gray-100 mb-2 line-clamp-1" title={title}>
          {title}
        </h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2" title={description}>
          {description}
        </p>
        
        <div className="mt-auto w-full flex flex-col items-center gap-3">
          <span className="font-bold text-xl text-gray-800 dark:text-gray-100">{price} ₾</span>
          <Button variant="primary" onClick={handleBuyNow} className="w-full py-2">
            ყიდვა
          </Button>
        </div>
      </div>
      
    </div>
  );
});

export default Card;