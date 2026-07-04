import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import NavMenu from "../NavMenu";
import RightMenu from "../RigthMenu";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-25 w-max-321.5 w-full fr:pt-7.25 fr:pl-13.5 fr:pr-25 fr:items-stretch fixed z-50 bg-[#FFF]">
        <div className="w-full px-2 flex justify-between items-center max-h-10.25 fr:px-0 fr:relative fr:justify-center">
          <Logo className="fr:absolute fr:left-0"></Logo>
          <NavMenu className="hidden md:flex fr:absolute"></NavMenu>
          <RightMenu className="hidden md:flex fr:absolute fr:right-0"></RightMenu>
          <MobileMenu className="flex md:hidden"></MobileMenu>
        </div>
      </div>
      <div className="h-25 -z-50"></div>
    </div>
  );
};
export default Header;
