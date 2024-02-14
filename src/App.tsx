import Navigation from './components/UI/Navigation';
import Home from './components/Home';
import Footer from '#components/UI/Footer';

function App() {
  return (
    <>
      <div className="flex flex-col p-4 max-md:p-2 min-h-lvh">
        <Navigation />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
