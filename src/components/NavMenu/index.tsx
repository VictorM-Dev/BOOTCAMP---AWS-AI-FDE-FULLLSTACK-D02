type NavMenuProps = {
  className?: string;
  children?: React.ReactNode;
};
const NavMenu = ({ className, children }: NavMenuProps) => {
  return (
    <nav
      className={`w-107.5 flex justify-between font-poppins text-[16px] text-over-primary ${className}`}
    >
      <a className="hover:cursor-pointer hover:scale-105 transition">Home</a>
      <a className="hover:cursor-pointer hover:scale-105 transition">Shop</a>
      <a className="hover:cursor-pointer hover:scale-105 transition">About</a>
      <a className="hover:cursor-pointer hover:scale-105 transition">Contact</a>
      {children}
    </nav>
  );
};
export default NavMenu;
