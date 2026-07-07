import clsx from "clsx";
import HeroButton from "../HeroButton";

const Inspiration = () => {
  return (
    <div>
      <div className={clsx("min-w-141 pl-25 pr-10.5")}>
        <h1 className={clsx("text-[40px] text-primary-text-200 font-bold font-poppins leading-12")}>50+ Beautiful rooms inspiration</h1>
        <p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
        <HeroButton label="Explore More" className={clsx("max-h-12 max-w-44", "font-semibold")}></HeroButton>
      </div>
    </div>
  );
};
export default Inspiration;
