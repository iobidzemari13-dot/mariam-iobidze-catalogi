import { useState, useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';



interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const Catalog = () => {
  const [filter, setFilter] = useState('all');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch('/products.json');
        if (!response.ok) {
          throw new Error('მონაცემების ჩატვირთვა ვერ მოხერხდა');
        }
        const data = await response.json();
        setTimeout(() => {
          setProducts(data);
          setIsLoading(false);
        }, 800);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'დაფიქსირდა უცნობი შეცდომა');
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []);

  const filteredItems = products.filter(item => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <Section title="ჩვენი კოლექცია" bgGray={true}>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Button variant={filter === 'all' ? 'primary' : 'outline'} onClick={() => setFilter('all')}>
          ყველა
        </Button>
        <Button variant={filter === 'rings' ? 'primary' : 'outline'} onClick={() => setFilter('rings')}>
          ბეჭდები
        </Button>
        <Button variant={filter === 'earrings' ? 'primary' : 'outline'} onClick={() => setFilter('earrings')}>
          საყურეები
        </Button>
        <Button variant={filter === 'necklaces' ? 'primary' : 'outline'} onClick={() => setFilter('necklaces')}>
          ყელსაბამები
        </Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-rose-600"></div>
        </div>
      ) : error ? (
        <div className="text-center text-red-500 py-10 font-medium">
          {error}
        </div>
      ) : filteredItems.length === 0 ? (
        <div className="text-center text-gray-500 py-10">
          ამ კატეგორიაში პროდუქცია ჯერ არ არის.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((product) => (
            <Card 
              key={product.id}
              id={product.id} 
              title={product.title}
              price={product.price} 
              image={product.image}
              description={product.description}
            />
          ))}
        </div>
      )}
    </Section>
  );
};

export default Catalog;