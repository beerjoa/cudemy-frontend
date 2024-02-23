interface FooterProps extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer
      className="footer footer-center p-4 shadow-lg max-md:p-2 bg-base-200 text-base-content text-lg max-md:text-sm rounded-lg w-full shadow mb-2 mt-auto outline outline-1 outline-base-content/20"
      role="footer"
    >
      <aside>
        <p>
          {'Copyright © 2024 '}
          <a href="https://blog.beerjoa.dev" className="link link-hover">
            Jaeyong Shim
          </a>
          <br />
          {'Powered by '}
          <a href="https://reactjs.org/" className="link link-hover">
            React
          </a>
          {' & '}
          <a href="https://tailwindcss.com/" className="link link-hover">
            Tailwind CSS
          </a>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
