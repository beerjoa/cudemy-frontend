export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
