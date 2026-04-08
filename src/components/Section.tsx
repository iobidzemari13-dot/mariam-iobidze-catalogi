interface SectionProps {
  title: string;
  children: any;
  bgGray?: boolean;
}

const Section = ({ title, children, bgGray = false }: SectionProps) => {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgGray ? 'bg-stone-50' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl font-serif text-center text-gray-900 mb-12">
          {title}
        </h2>
        
        
        <div>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;