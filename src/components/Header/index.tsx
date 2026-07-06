import clsx from "clsx";
import Logo from "../Logo";
import MobileMenu from "../MobileMenu";
import NavMenu from "../NavMenu";
import RightMenu from "../RigthMenu";

const Header = () => {
  return (
    <div>
      <div
        className={clsx(
          "flex justify-center items-center",
          "h-25 w-full max-w-360",
          "fr:pt-7.25 fr:pl-13.5 fr:pr-25 fr:items-stretch",
          "fixed z-50",
          "bg-primary",
        )}
      >
        <div
          className={clsx(
            "flex justify-between items-center",
            "w-full px-2 max-h-10.25",
            "fr:px-0 fr:relative fr:justify-center",
          )}
        >
          <Logo className={clsx("fr:absolute fr:left-0")}></Logo>
          <NavMenu
            className={clsx("hidden", "md:flex", "fr:absolute")}
          ></NavMenu>
          <RightMenu
            className={clsx("hidden", "md:flex", "fr:absolute fr:right-0")}
          ></RightMenu>
          <MobileMenu className={clsx("flex", "md:hidden")}></MobileMenu>
        </div>
      </div>
      {/*Essa div serve apenas como elemento para preencher o espaço do fixed*/}
      <div className={clsx("h-25", "-z-50")}></div>
    </div>
  );
};
export default Header;
