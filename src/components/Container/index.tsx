type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`flex justify-center w-full ${className}`}>
      <div className="max-w-360 w-full">{children}</div>
    </div>
  );
};
export default Container;
