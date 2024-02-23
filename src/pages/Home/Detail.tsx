import { Link } from 'react-router-dom';

interface DetailProps extends React.ComponentPropsWithoutRef<'div'> {}

const Detail: React.FC<DetailProps> = () => {
  return (
    <div className="grid max-[816px]:grid-cols-1 min-[816px]:max-xl:grid-cols-2 xl:grid-cols-3 gap-4 max-md:gap-2 max-w-6xl mx-auto">
      <div className="card w-full h-60 outline outline-1 outline-base-content/20 bg-base-300 text-base-content overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
        <div className="card-body [--padding-card:24px]">
          <div className="card-title mb-2">
            <h2 className="text-xl font-bold rounded">About Me</h2>
          </div>
          <div className="h-full rounded-lg">
            <p className="line-clamp-4">
              I'm a Software Developer with 3+ years of experience specializing
              in back-end and full-stack development. I Enjoy learning new
              technologies and sharing knowledge with others.
            </p>
          </div>
          <div className="card-actions sticky justify-end">
            <button className="btn btn-sm btn-primary">
              <p>Visit My Blog →</p>
            </button>
          </div>
        </div>
      </div>
      <div className="card w-full h-60 outline outline-1 outline-base-content/20 bg-base-300 text-base-content overflow-hidden shadow-lg transform transition-transform duration-500 hover:scale-105">
        <div className="card-body [--padding-card:24px]">
          <div className="card-title mb-2">
            <h2 className="text-xl font-bold rounded">
              Udemy Discount Checker
            </h2>
          </div>
          <div className="h-full rounded-lg">
            <p className="line-clamp-4">
              Udemy Discount Checker(UDC) is a helpful service that provides
              up-to-date information about your region's latest Udemy course
              discounts.
            </p>
          </div>
          <div className="card-actions sticky justify-end">
            <Link to="/discounts" className="btn btn-sm btn-primary">
              <p>Check Now →</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
