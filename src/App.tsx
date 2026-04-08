import { BrowserRouter } from "react-router-dom";
import MainLayout from './layouts/MainLayout'; // შემოგვაქვს ჩვენი ლეიაუტი

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        {/* აქ დროებით ჩავსვათ ტექსტი, სანამ Hero სექციას ავაწყობთ */}
        <div className="flex items-center justify-center py-20">
          <h1 className="text-3xl font-bold text-rose-600">
            მთავარი გვერდის კონტენტი აქ იქნება!
          </h1>
        </div>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;