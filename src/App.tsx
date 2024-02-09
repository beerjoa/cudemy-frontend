import Navigation from './components/UI/Navigation';
import Home from './components/Home';

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-200 dark:bg-gray-800 p-4 transition duration-200">
        <Navigation />
        <Home />
      </div>
    </>
  );
}

export default App;
