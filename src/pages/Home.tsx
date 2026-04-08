import Hero from '../components/Hero';
import Section from '../components/Section';
import Card from '../components/Card';

const Home = () => {
  return (
    <div>
      
      <Hero />
      
      
      <Section title="პოპულარული სამკაულები">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            title="ვერცხლის ბეჭედი" 
            image="https://images.unsplash.com/photo-1605100804763-247f6612d543?auto=format&fit=crop&w=500&q=80" 
            description="ულამაზესი ვერცხლის ბეჭედი მარგალიტის დეტალებით."
          />
          <Card 
            title="ოქროს ყელსაბამი" 
            image="https://images.unsplash.com/photo-1599643478514-4a420804ce71?auto=format&fit=crop&w=500&q=80" 
            description="დახვეწილი ოქროს ყელსაბამი ყოველდღიური სტილისთვის."
          />
          <Card 
            title="საყურეები ბროლით" 
            image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80" 
            description="ხელნაკეთი საყურეები ბუნებრივი ქვებით და მინანქრით."
          />
        </div>
      </Section>
    </div>
  );
};

export default Home;