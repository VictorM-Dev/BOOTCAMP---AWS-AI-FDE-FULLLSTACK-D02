import { LuMenu } from "react-icons/lu";
import NavMenu from "../NavMenu";
import { useState } from "react";
import RightMenu from "../RigthMenu";

type MobileMenuProps = {
  className?: string;
};
const MobileMenu = ({ className }: MobileMenuProps) => {
  const [ativo, setAtivo] = useState(false);
  return (
    <div className={`relative ${className}`}>
      <LuMenu
        size={32}
        className="hover:cursor-pointer hover:scale-110 transition-all"
        onClick={() => setAtivo(!ativo)}
      ></LuMenu>
      <NavMenu
        className={`absolute flex-col top-16.25 -right-2 h-[calc(100vh-100px)] max-w-[50vw] min-w-62.5 bg-[#FFF] justify-center items-center gap-5 ${ativo?"flex":"hidden"}`}
      >
        <RightMenu className="mt-6"></RightMenu>
      </NavMenu>
    </div>
  );
};
export default MobileMenu;
