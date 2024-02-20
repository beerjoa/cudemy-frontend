import Twemoji from '#components/UI/Twemoji';
import DarkModeSwitcher from '../DarkModeSwitcher';
import Button from './Button';

type NavigationProps = any;

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <div className="navbar bg-base-200 w-full rounded-lg shadow mb-4 max-md:mb-2 max-md:p-0 p-2 sticky top-0 z-50 max-md:min-h-12">
      <div className="flex-1">
        <Button className="btn btn-square btn-md btn-ghost max-md:btn-sm ml-2">
          <a className="link link-primary" href="#">
            <Twemoji
              className="fill-current"
              emojiClassName="w-6 h-6 md:w-10 md:h-10"
              emoji="📖"
            />
          </a>
        </Button>
      </div>
      <div className="flex-none space-x-8 mr-2 max-md:space-x-2 max-md:mr-1">
        <Button className="btn btn-error btn-md btn-ghost text-lg max-md:btn-sm max-md:text-md">
          Discounts
        </Button>
      </div>
      <div className="flex-none">
        <DarkModeSwitcher />
      </div>
    </div>
  );
};

export default Navigation;
