import HeroButton from "../HeroButton";

const Hero = () => {
  return (
    <div className="md:h-[716.83px] bg-[url('/Images/Hero.jpg')] bg-cover bg-no-repeat bg-center md:pt-38.25 flex md:justify-end md:pr-14.5 justify-center items-baseline px-4 md:pl-0 font-poppins py-20">
      <div className="max-w-160.75 w-full rounded-[10px] bg-secundary pt-15.5 pl-10.25 flex flex-col pr-14 pb-9.25">
        <h2 className="text-primary-text font-semibold tracking-[3px] text-[16px] mb-1">
          New Arrival
        </h2>
        <h1 className="font-bold text-over-secundary md:text-[52px] md:leading-16.25 sm:text-[42px] sm:leading-14 text-[32px] leading-12 mb-4.25 max-xxs:text-[22px] max-xxs:leading-8">
          Discovery Our <br />
          New Collection
        </h1>
        <p className="text-primary-text md:text-[18px] leading-8 font-medium mb-11.5 max-xxs:text-[14px] max-xxs:leading-7 max-xxs:mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <HeroButton label="Buy Now"></HeroButton>
      </div>
    </div>
  );
};
export default Hero;
