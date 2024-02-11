type LoadingProps = any;

const Loading: React.FC<LoadingProps> = () => {
  return (
    <>
      {[1, 2, 3].map((_, index) => (
        <div
          key={index}
          className="w-full max-w-sm rounded-md overflow-hidden shadow-lg p-6 transform transition-transform duration-500 bg-gray-200 dark:bg-gray-700 animate-pulse content-center"
        >
          <h2 className="font-bold text-xl mb-2 rounded bg-gray-300 dark:bg-gray-600 h-8"></h2>
          <div className="mb-2 rounded bg-gray-300 dark:bg-gray-600">
            <p className="text-base h-16" />
            <p className="text-base h-8" />
          </div>
          <div className="rounded bg-gray-300 dark:bg-gray-600 h-8" />
        </div>
      ))}
    </>
  );
};

export default Loading;
