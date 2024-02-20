import { useDispatch, useSelector } from 'react-redux';

import Button from '#components/UI/Button.tsx';
import Twemoji from '#components/UI/Twemoji.tsx';
import MenuDropdown from '#components/Navigation/MenuDropdown.tsx';
import { AppDispatch, RootState } from '#store/index.ts';
import { navigationUIActions } from '#store/navigation-ui-slice.ts';
import DarkModeSwitcher from './DarkModeSwitcher';

interface NavigationProps extends React.ComponentPropsWithoutRef<'div'> {}

const Navigation: React.FC<NavigationProps> = () => {
  const dispatch = useDispatch<AppDispatch>();
  const menus = useSelector((state: RootState) => state.navigationUI.menus);
  // const isMenuOpen = useSelector(
  //   (state: RootState) => state.navigationUI.isMenuOpen,
  // );

  // const handleMenuClick = () => {
  //   dispatch(navigationUIActions.openAndCloseMenu({}));
  // };

  // const handleMenuClose = () => {
  //   dispatch(navigationUIActions.closeMenu({}));
  // };

  return (
    <div className="navbar bg-base-200 w-full rounded-lg shadow mb-4 max-md:mb-2 max-md:p-0 sticky top-0 z-50">
      <div className="flex-1">
        <div className="block min-[816px]:hidden">
          <MenuDropdown menus={menus} />
        </div>
        <Button className="btn btn-square btn-lg btn-ghost max-md:btn-md mx-2">
          <a className="link link-primary" href="#">
            <Twemoji
              className="fill-current"
              emojiClassName="w-8 h-8 md:w-12 md:h-12"
              emoji="📖"
            />
          </a>
        </Button>
      </div>
      <div className="flex-none space-x-8 max-md:space-x-2 max-md:mr-1 px-1">
        <div className="hidden min-[816px]:block">
          <ul className="menu menu-horizontal">
            {menus.map((menu: any, index: number) => (
              <Button key={index} className="btn btn-lg btn-ghost text-xl">
                {menu}
              </Button>
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
