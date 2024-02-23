export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const rootButtonClass = 'btn btn-ghost';
  return (
    <button className={rootButtonClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
