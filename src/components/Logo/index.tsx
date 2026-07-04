type LogoProps = {
  className?: string;
};
const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`flex gap-1.25 items-center ${className}`}>
      <img src="/Logo/Logo.svg" alt="Logo furniro" className="w-12.5 h-8" />
      <h1 className="font-montserrat font-bold text-[34px]">Furniro</h1>
    </div>
  );
};
export default Logo;
