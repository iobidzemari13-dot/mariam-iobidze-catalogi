import Section from '../components/Section';
import Button from '../components/Button';

const Contact = () => {
  return (
    <Section title="დამიკავშირდით">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <div className="mb-8 text-center text-gray-600">
          <p className="mb-2">გაქვთ შეკითხვები ან გსურთ ინდივიდუალური შეკვეთა?</p>
          <p className="font-medium text-rose-600">ქუთაისი, საქართველო</p>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">სახელი</label>
            <input type="text" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition" placeholder="თქვენი სახელი" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ელ-ფოსტა</label>
            <input type="email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition" placeholder="example@mail.com" />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">შეტყობინება</label>
            <textarea rows={5} className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none transition resize-none" placeholder="მოგვწერეთ..."></textarea>
          </div>
          
          <Button variant="primary">გაგზავნა</Button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;