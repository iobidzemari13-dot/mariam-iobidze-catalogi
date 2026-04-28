import { type ReactNode } from 'react';

interface SectionProps {
  title: string;
  children: ReactNode;
  bgGray?: boolean;
}

const Section = ({ title, children, bgGray = false }: SectionProps) => {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${bgGray ? 'bg-stone-50 dark:bg-black' : 'bg-white dark:bg-black'} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        
        <h2 className="text-3xl font-serif text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">
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