import { Link } from 'react-router-dom';

import ReactIcon from '#assets/icons/react.svg';

interface DetailProps extends React.ComponentPropsWithoutRef<'div'> {}

const Detail: React.FC<DetailProps> = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-4 gap-4 w-full min-h-screen max-[816px]:grid-cols-1">
      <div className="rounded-lg bg-base-300 w-full p-8 outline outline-1 outline-base-content/30 shadow-xl transition-transform duration-200 hover:scale-105">
        <h3 className="mb-4 text-left font-semibold text-xl">About me</h3>
        <div className="font-light">
          A Software Developer who prefers to design and develop software
          solutions using various software development methodologies and
          knowledge.
        </div>
        <a
          href="https://blog.beerjoa.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-primary mt-4 items-center outline-1 outline-base-content/30 focus:shadow-outline focus:outline-none transition-transform duration-200 hover:scale-105"
        >
          <p>Visit my blog →</p>
        </a>
      </div>
      <div className="rounded-lg bg-base-300 w-full p-8 outline outline-1 outline-base-content/30 shadow-xl transition-transform duration-200 hover:scale-105">
        <h3 className="mb-4 text-left font-semibold text-xl">
          Udemy Discount Checker
        </h3>
        <div className="font-light h-[96px]">
          Udemy Discount Checker(UDC) is a helpful service that brings you
          up-to-date information about the latest Udemy course discounts
          available in your region.
        </div>
        <Link
          to="/discounts"
          className="btn btn-sm btn-primary mt-4 items-center outline-1 outline-base-content/30 focus:shadow-outline focus:outline-none transition-transform duration-200 hover:scale-105"
        >
          <p>Check Now →</p>
        </Link>
      </div>
    </div>
  );
};

export default Detail;
