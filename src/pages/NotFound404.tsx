import ErrorIcon from '#assets/icons/error.svg';

interface NotFound404Props extends React.ComponentPropsWithoutRef<'div'> {}

const NotFound404: React.FC<NotFound404Props> = () => {
  return (
    <div className="hero p-4 flex flex-col min-h-screen bg-base-200 items-center w-full rounded-lg max-md:p-4 mb-4 max-md:mb-2 outline outline-1 outline-base-content/20 shadow-lg">
      <div className="hero-content text-center min-w-96">
        <div className="max-w-xl">
          <img
            src={ErrorIcon}
            alt="error-icon"
            className="size-16 md:size-24 mx-auto mb-2 md:mb-4"
          />
          <h1 className="text-5xl max-md:text-3xl font-bold mb-2 max-md:mb-1">
            You are lost!
          </h1>
          <p className="text-xl max-md:text-xs text-center py-2 md:py-4 ">
            The page you are looking for is not found. <br />
            Please check the URL and try again. <br />
          </p>
        </div>
      </div>
      <div className="divider place-content-center my-[10px]" />
    </div>
  );
};

export default NotFound404;
