import Twemoji from '#components/UI/Twemoji';

interface HomeProps extends React.ComponentPropsWithoutRef<'div'> {}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className="hero flex flex-col min-h-screen bg-base-200 items-center w-full rounded-lg p-8 max-md:p-4 mb-4 max-md:mb-2 ">
      <div className="hero-content text-center min-w-96">
        <div className="max-w-xl ">
          <div className="mb-4 max-md:mb-2">
            <Twemoji
              className="fill-current w-16 h-16 md:w-24 md:h-24"
              emojiClassName="w-16 h-16 md:w-24 md:h-24"
              emoji="🙋‍♂️"
            />
          </div>
          <h1 className="text-5xl max-md:text-3xl font-bold mb-2 max-md:mb-1">
            Hello There!
          </h1>
          <p className="text-xl max-md:text-xs text-center py-2 md:py-4 ">
            I'm Beerjoa, a full-stack developer!
          </p>
        </div>
      </div>

      <div className="divider place-content-center" />
    </div>
  );
};
export default Home;
