import clsx from "clsx";
import HeroButton from "../HeroButton";
import InspirationCard from "../InspirationCard";
import InspirationCaroucel from "../InspirationCaroucel";

const Inspiration = () => {
  return (
    <div className={clsx("py-11", "flex items-center flex-wrap justify-center")}>
      <div className={clsx("min-w-141 pl-25 pr-10.5 py-10")}>
        <h1
          className={clsx(
            "text-[40px] text-primary-text-200 font-bold font-poppins leading-12",
            "mb-1.75",
          )}
        >
          50+ Beautiful rooms inspiration
        </h1>
        <p className={clsx("mb-6.25", "text-[16px] font-poppins font-medium")}>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </p>
        <HeroButton
          label="Explore More"
          className={clsx("h-12 w-44", "font-semibold text-[16px] normal-case")}
        ></HeroButton>
      </div>
      <InspirationCard></InspirationCard>
      <div><InspirationCaroucel></InspirationCaroucel></div>
    </div>
  );
};
export default Inspiration;
