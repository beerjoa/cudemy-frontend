import DarkModeSwitcher from '../DarkModeSwitcher';
import Button from './Button';

type NavigationProps = any;

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className="w-full rounded-lg bg-white dark:bg-gray-900 shadow mb-8 p-2 md:p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <a
          className="text-2xl font-bold text-gray-800 dark:text-gray-200"
          href="#"
        >
          <img src="/fav.svg" alt="fav" className="h-8 w-8" />
        </a>
        <div className="flex space-x-8">
          <Button className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
            Discount Status
          </Button>
          <DarkModeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
