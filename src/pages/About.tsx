import Section from '../components/Section';

const About = () => {
  return (
    <Section title="ჩემს შესახებ">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
        
        <div className="w-full md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=600&q=80" 
            alt="დიზაინერი სამუშაო პროცესში" 
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>
        
    
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-2xl font-serif text-gray-900 dark:text-white transition-colors duration-300">გამარჯობა!</h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors duration-300">
            მე ვარ ხელნაკეთი ნივთების დიზაინერი. ჩემი გატაცება სამკაულების შექმნით წლების წინ დაიწყო და დღეს ის ჩემი ყოველდღიურობის განუყოფელი ნაწილია.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg transition-colors duration-300">
            თითოეულ ნივთს ვქმნი დიდი სიყვარულით, ყურადღებას ვაქცევ უმცირეს დეტალებს და ვიყენებ მხოლოდ მაღალი ხარისხის მასალებს, რათა თქვენამდე სრულყოფილი პროდუქტი მოვიდეს.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default About;