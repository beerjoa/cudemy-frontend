import { useDispatch, useSelector } from 'react-redux';

import Button from '#components/UI/Button.tsx';
import Twemoji from '#components/UI/Twemoji.tsx';
import MenuDropdown from '#components/Navigation/MenuDropdown.tsx';
import { AppDispatch, RootState } from '#store/index.ts';
import DarkModeSwitcher from './DarkModeSwitcher';
import { Link } from 'react-router-dom';
import { TNavigationMenu } from '#types/UI';

interface NavigationProps extends React.ComponentPropsWithoutRef<'div'> {}

const Navigation: React.FC<NavigationProps> = () => {
  const menus = useSelector((state: RootState) => state.navigationUI.menus);

  return (
    <div
      className="navbar bg-base-200 w-full rounded-lg shadow-lg mb-4 max-md:mb-2 max-md:p-0 sticky top-0 z-50 outline outline-1 outline-base-content/20"
      role="navigation"
    >
      <div className="flex-1">
        <div className="block min-[816px]:hidden">
          <MenuDropdown menus={menus} />
        </div>
        <Link to="/">
          <Button className="btn-square btn-lg max-md:btn-md mx-2">
            <Twemoji
              className="fill-current"
              emojiClassName="w-8 h-8 md:w-12 md:h-12"
              emoji="📖"
            />
          </Button>
        </Link>
      </div>
      <div className="flex-none space-x-8 max-md:space-x-2 max-md:mr-1 px-1">
        <div className="hidden min-[816px]:block">
          <ul className="menu menu-horizontal">
            {menus.map((menu: TNavigationMenu, index: number) => (
              <Link
                to={menu.path}
                key={index}
                className="btn btn-ghost btn-lg text-xl"
                role="button"
              >
                {menu.label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-none">
        <DarkModeSwitcher />
      </div>
    </div>
  );
};

export default Navigation;
