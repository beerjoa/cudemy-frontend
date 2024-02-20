import Button from '#components/UI/Button.tsx';
import { ENavigationMenu } from '#types/UI.ts';

interface MenuDropdownProps extends React.ComponentPropsWithoutRef<'div'> {
  menus: ENavigationMenu[];
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
        className="menu dropdown-content mx-[1px] mt-4 w-[calc((100vw)-1.1rem)] z-[1] p-2 shadow-xl bg-base-200 rounded-lg outline outline-1 outline-base-300 transform transition-transform duration-500"
      >
        {menus.map((menu: any, index: number) => (
          <Button
            key={index}
            className="btn btn-ghost btn-md font-medium text-xl my-1 hover:bg-accent hover:text-accent-content"
          >
            {menu}
          </Button>
        ))}
        <div className="divider divider-base-content/30 mx-[33%] my-2"></div>
      </ul>
    </div>
  );
};

export default MenuDropdown;
