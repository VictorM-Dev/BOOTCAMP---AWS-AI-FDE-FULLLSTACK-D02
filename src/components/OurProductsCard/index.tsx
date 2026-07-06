import clsx from "clsx";

type OurProductsCardProps = {
  image: string;
  name: string;
  description: string;
  currentPrice: string;
  offer: boolean;
  oldPrice?: string;
  discount?: number;
  isNew: boolean;
};
const OurProductsCard = ({
  image,
  name,
  description,
  currentPrice,
  offer,
  oldPrice,
  discount,
  isNew,
}: OurProductsCardProps) => {
  const commonClass: string =
    "h-12 w-12 rounded-full " +
    "flex justify-center items-center " +
    "text-primary font-poppins font-medium text-[16px] leading-6 " +
    "absolute top-6 right-6";
  return (
    <div className={clsx("min-w-71.25 h-111.5", "bg-card-product")}>
      <div
        className={clsx("w-full h-75.25", "relative")}
        style={{ backgroundImage: `url(${image})` }}
      >
        {offer && (
          <div className={clsx("bg-[#E97171]", commonClass)}>-{discount}%</div>
        )}
        {isNew && <div className={clsx("bg-[#2EC1AC]", commonClass)}>New</div>}
      </div>
      <h1
        className={clsx(
          "text-[24px] text-primary-text-200 font-poppins font-semibold leading-[28.8px]",
          "ml-4 mt-4",
        )}
      >
        {name}
      </h1>
      <p
        className={clsx(
          "text-over-card-product text-[16px] font-poppins leading-6 font-medium",
          "ml-4 mt-2",
        )}
      >
        {description}
      </p>
      <div className={clsx("ml-4 mt-2", "flex gap-4 items-center")}>
        <p
          className={clsx(
            "text-primary-text-200 font-semibold leading-6 font-poppins",
          )}
        >
          {currentPrice}
        </p>
        {offer && (
          <p
            className={clsx(
              "text-[#B0B0B0] leading-6 text-[16px] line-through",
            )}
          >
            {oldPrice}
          </p>
        )}
      </div>
    </div>
  );
};
export default OurProductsCard;
