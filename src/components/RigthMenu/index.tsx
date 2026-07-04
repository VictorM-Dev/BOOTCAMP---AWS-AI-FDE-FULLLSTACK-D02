type RightMenuProps = {
  className?: string;
};
const RightMenu = ({ className }: RightMenuProps) => {
  return (
    <div className={`flex gap-[33.66px] ${className}`}>
      <a className="hover:cursor-pointer hover:scale-110 transition">
        <img
          src="/Icons/alert.svg"
          alt="Ícone de alerta"
          className="max-h-[18.66px]"
        ></img>
      </a>
      <a className="hover:cursor-pointer hover:scale-110 transition">
        <img
          src="/Icons/shop.svg"
          alt="Ícone de usuário"
          className="max-h-[22.05px]"
        ></img>
      </a>
    </div>
  );
};
export default RightMenu;
