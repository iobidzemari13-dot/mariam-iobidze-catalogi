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
            id={101} 
            price={125} 
            title="ოქროს სამაჯური" 
            image="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80" 
            description="ულამაზესი ოქროს სამაჯური მარგალიტის დეტალებით."
            priority={true}
          />
          <Card 
            id={102}
            price={450}
            title="მარგალიტის ყელსაბამი" 
            image="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80" 
            description="დახვეწილი მარგალიტის ყელსაბამი ყოველდღიური სტილისთვის."
            priority={true}
          />
          <Card 
            id={103}
            price={180}
            title="საყურეები ბროლით" 
            image="https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=800&q=80" 
            description="ხელნაკეთი საყურეები ბუნებრივი ქვებით და მინანქრით."
            priority={true}
          />
        </div>
      </Section>
    </div>
  );
};

export default Home;