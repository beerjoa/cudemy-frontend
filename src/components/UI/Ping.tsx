type PingProps = React.HTMLAttributes<HTMLSpanElement> & {
  color?: 'red' | 'green' | 'gray';
};

const Ping: React.FC<PingProps> = (props) => {
  let content = (
    <>
      <span className="absolute inline-flex h-full w-full rounded-full bg-gray-300 opacity-75" />
      <span className="relative inline-flex rounded-full size-3 md:size-4 bg-gray-400" />
    </>
  );

  if (props.color === 'green') {
    content = (
      <span className="relative flex size-3 md:size-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
        <span className="relative inline-flex rounded-full size-3 md:size-4 bg-emerald-400" />
      </span>
    );
  } else if (props.color === 'red') {
    content = (
      <span className="relative flex size-3 md:size-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-300 opacity-75" />
        <span className="relative inline-flex rounded-full size-3 md:size-4 bg-red-400" />
      </span>
    );
  }
  return <span className="relative flex size-3 md:size-4">{content}</span>;
};

export default Ping;
