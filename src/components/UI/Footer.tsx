type FooterProps = React.HTMLAttributes<HTMLElement>;

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer footer-center p-4 max-md:p-2 bg-base-200 text-base-content text-lg max-md:text-sm rounded-lg w-full shadow mb-2 mt-auto">
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
