import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-stone-100 py-24 px-4 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-6 leading-tight">
          აღმოაჩინე შენი <span className="text-rose-600 italic">უნიკალური</span> სტილი
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          ხელნაკეთი სამკაულები, რომლებიც ხაზს უსვამს შენს ინდივიდუალურობას. თითოეული დეტალი შექმნილია სინაზით.
        </p>
        <Link to="/catalog">
          <button className="bg-rose-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-rose-700 transition shadow-md">
            კატალოგის ნახვა
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;