import Detail from '#pages/Home/Detail';
import HandShakeIcon from '#assets/icons/hand-shake.svg';

interface HomeProps extends React.ComponentPropsWithoutRef<'div'> {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="hero p-4 flex flex-col min-h-screen bg-base-200 items-center w-full rounded-lg max-md:p-4 mb-4 max-md:mb-2 outline outline-1 outline-base-content/20 shadow-lg">
      <div className="hero-content text-center min-w-96">
        <div className="max-w-xl">
          <img
            src={HandShakeIcon}
            alt="hand-shake-icon"
            className="size-16 md:size-24 mx-auto mb-2 md:mb-4"
          />
          <h1 className="text-5xl max-md:text-3xl font-bold mb-1 md:mb-2">
            Hello There!
          </h1>
          <p className="md:text-xl text-xs text-center py-2 md:py-4 ">
            Welcome to my playground! <br />
            You can find my small stuff, and more. <br />
            Please enjoy your stay!
          </p>
        </div>
      </div>
      <div className="divider place-content-center my-[10px]" />
      <Detail />
    </div>
  );
};
export default Home;
