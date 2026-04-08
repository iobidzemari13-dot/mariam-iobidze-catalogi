import Section from '../components/Section';
import Card from '../components/Card';
import Button from '../components/Button';

const Catalog = () => {
  return (
    <Section title="ჩვენი კოლექცია" bgGray={true}>
      
      
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <Button variant="primary">ყველა</Button>
        <Button variant="outline">ბეჭდები</Button>
        <Button variant="outline">საყურეები</Button>
        <Button variant="outline">ყელსაბამები</Button>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card title="მარგალიტის საყურე" image="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500" description="ნაზი მარგალიტით." />
        <Card title="ვერცხლის ბეჭედი" image="https://images.unsplash.com/photo-1605100804763-247f6612d543?w=500" description="მინიმალისტური დიზაინი." />
        <Card title="ოქროს ყელსაბამი" image="https://images.unsplash.com/photo-1599643478514-4a420804ce71?w=500" description="ელეგანტური სტილი." />
        <Card title="სამაჯური" image="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=500" description="ბუნებრივი ქვებით." />
      </div>
    </Section>
  );
};

export default Catalog;