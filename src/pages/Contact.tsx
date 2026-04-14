import { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';

const Contact = () => {
  
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <Section title="დამიკავშირდით">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">სახელი</label>
            <input 
              type="text" 
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-rose-500 outline-none" 
              placeholder="თქვენი სახელი" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">ელ-ფოსტა</label>
            <input 
              type="email" 
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-rose-500 outline-none" 
              placeholder="example@mail.com" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">შეტყობინება</label>
            <textarea 
              rows={5} 
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-rose-500 outline-none resize-none" 
              placeholder="მოგვწერეთ..."
            ></textarea>
          </div>
          
          <Button variant="primary">გაგზავნა</Button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;