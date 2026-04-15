import { useState, useEffect } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';

const Catalog = () => {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products/category/jewelery');
        
        if (!response.ok) {
          throw new Error('მონაცემები ვერ ჩაიტვირთა');
        }

        const data = await response.json();
        setItems(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Section title="ჩვენი კოლექცია" bgGray={true}>
      
      {loading && (
        <div className="text-center py-10 text-rose-600 font-medium animate-pulse">
          იტვირთება კოლექცია...
        </div>
      )}

      {error && (
        <div className="text-center py-10 text-red-500 font-semibold">
          შეცდომა: {error}
        </div>
      )}

      {!loading && !error && (
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {items.map((product) => (
            <Card 
              key={product.id}
              title={product.title}
              image={product.image}
              
              
              description={`${product.description.substring(0, 100)}...`}
            />
          ))}
        </div>
      )}
    </Section>
  );
};

export default Catalog;