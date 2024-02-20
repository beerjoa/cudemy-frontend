import Button from '#components/UI/Button.tsx';
import { ENavigationMenu } from '#types/UI.ts';

type MenuDropdownProps = React.HTMLAttributes<HTMLDivElement> & {
  menus: ENavigationMenu[];
  isMenuOpen: boolean;
  handleMenuClick: () => void;
};

const MenuDropdown: React.FC<MenuDropdownProps> = ({
  menus,
  isMenuOpen,
  handleMenuClick,
}) => {
  return (
    <div className="dropdown">
      <Button
        tabIndex={0}
        role="button"
        className="btn btn-square btn-ghost btn-md ml-2 md:btn-lg"
        onClick={handleMenuClick}
      >
        <svg
          className="swap-off fill-current w-6 h-6 md:w-12 md:h-12"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
      </Button>
      {isMenuOpen ? (
        <ul
          tabIndex={0}
          className="menu dropdown-content mt-2 z-[1] p-2 shadow bg-base-200 rounded-lg w-52 outline outline-1 outline-base-300"
          onChange={handleMenuClick}
        >
          {menus.map((menu: any, index: number) => (
            <li key={index} className="">
              <Button key={index}>{menu}</Button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default MenuDropdown;
