import Button from "./Button";


interface CardProps {
  title: string;
  image: string;
  description: string;
}

const Card = ({ title, image, description }: CardProps) => {
  return (
    <div className="bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden group">
      
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
        />
      </div>
      
      
      <div className="p-5 flex flex-col items-center text-center">
        <h3 className="text-xl font-serif text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-5 line-clamp-2">{description}</p>
        
        
        <Button variant="outline">მეტის ნახვა</Button>
      </div>
    </div>
  );
};

export default Card;