import { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

const Catalog = () => {
  
  const [filter, setFilter] = useState('all');

  return (
    <Section title="ჩვენი კოლექცია" bgGray={true}>
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        
        <Button onClick={() => setFilter('all')} variant={filter === 'all' ? 'primary' : 'outline'}>ყველა</Button>
        <Button onClick={() => setFilter('rings')} variant={filter === 'rings' ? 'primary' : 'outline'}>ბეჭდები</Button>
        <Button onClick={() => setFilter('earrings')} variant={filter === 'earrings' ? 'primary' : 'outline'}>საყურეები</Button>
        <Button onClick={() => setFilter('necklaces')} variant={filter === 'necklaces' ? 'primary' : 'outline'}>ყელსაბამები</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        <Card title="მარგალიტის საყურე" image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500" description="ნაზი მარგალიტით." />
        <Card title="ვერცხლის ბეჭედი" image="https://images.unsplash.com/photo-1605100804763-247f6612d543?w=500" description="მინიმალისტური დიზაინი." />
        <Card title="ოქროს ყელსაბამი" image="https://images.unsplash.com/photo-1599643478514-4a420804ce71?w=500" description="ელეგანტური სტილი." />
      </div>
    </Section>
  );
};

export default Catalog;