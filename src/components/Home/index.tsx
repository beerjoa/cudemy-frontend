import Detail from '#components/Home/Detail';
import HomeImg from '#assets/images/beerjoa.png';

interface HomeProps extends React.ComponentPropsWithoutRef<'div'> {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="hero p-4 flex flex-col min-h-screen bg-base-200 items-center w-full rounded-lg max-md:p-4 mb-4 max-md:mb-2 outline outline-1 outline-base-content/20 shadow-lg">
      <div className="hero-content text-center min-w-96">
        <div className="max-w-xl">
          <div className="size-1/3 md:size-1/2 bg-base-300 rounded-3xl mx-auto mb-4 max-md:mb-2 shadow-inner">
            <img
              src={HomeImg}
              alt="beerjoa"
              className="p-3 content-center mx-auto mb-0 transition-transform duration-300 ease-linear hover:scale-110"
            />
          </div>
          <h1 className="text-5xl max-md:text-3xl font-bold mb-2 max-md:mb-1">
            Hello There!
          </h1>
          <p className="text-xl max-md:text-xs text-center py-2 md:py-4 ">
            Welcome to my playground! <br />
            You can find my small stuff, and more.
          </p>
        </div>
      </div>

      <div className="divider place-content-center my-[10px]" />
      <Detail />
    </div>
  );
};
export default Home;
