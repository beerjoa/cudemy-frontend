import { TNavigationMenu } from '#types/UI.ts';
import { Link } from 'react-router-dom';

interface MenuDropdownProps extends React.ComponentPropsWithoutRef<'div'> {
  menus: TNavigationMenu[];
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ menus }) => {
  return (
    <div className="dropdown">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-square btn-ghost btn-md ml-2 md:btn-lg"
      >
        <svg
          className="swap-off fill-current w-8 h-8 md:w-12 md:h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content mt-4 w-[calc((100vw)-1rem)] z-[1] p-2 shadow-xl bg-base-200 rounded-lg outline outline-1 outline-base-content/20 transform transition-transform duration-500"
      >
        {menus.map((menu: TNavigationMenu, index: number) => (
          <Link
            to={menu.path}
            key={index}
            className="btn btn-ghost btn-md font-medium text-xl my-1 hover:bg-accent hover:text-accent-content"
            role="button"
          >
            {menu.label}
          </Link>
        ))}
        <div className="divider divider-base-content/40 mx-[33%] my-1"></div>
      </ul>
    </div>
  );
};

export default MenuDropdown;
