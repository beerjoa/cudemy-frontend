import Navigation from '#components/Navigation/index.tsx';
import Home from '#components/Home.tsx';
import Footer from '#components/UI/Footer.tsx';

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
