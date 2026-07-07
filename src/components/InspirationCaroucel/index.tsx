import clsx from "clsx";

const InspirationCaroucel = () => {
  return (
    <div>
      <div className={clsx("max-w-md overflow-hidden", "flex gap-6")}>
        <div className={clsx("overflow-hidden", "min-w-93 h-121.5")}>
          <div
            className={clsx(
              "bg-[url('/Caroucel/Caroucel1.png')] bg-cover bg-no-repeat bg-center",
              "w-full h-full",
              "hover:scale-110 transition",
            )}
          ></div>
        </div>
        <div className={clsx("overflow-hidden", "min-w-93 h-121.5")}>
          <div
            className={clsx(
              "bg-[url('/Caroucel/Caroucel2.png')] bg-cover bg-no-repeat bg-center",
              "w-full h-full",
              "hover:scale-110 transition",
            )}
          ></div>
        </div>
        <div className={clsx("overflow-hidden", "min-w-93 h-121.5")}>
          <div
            className={clsx(
              "bg-[url('/Caroucel/Caroucel3.png')] bg-cover bg-no-repeat bg-center",
              "w-full h-full",
              "hover:scale-110 transition",
            )}
          ></div>
        </div>
        <div className={clsx("overflow-hidden", "min-w-93 h-121.5")}>
          <div
            className={clsx(
              "bg-[url('/Caroucel/Caroucel4.png')] bg-cover bg-no-repeat bg-center",
              "w-full h-full",
              "hover:scale-110 transition",
            )}
          ></div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};
export default InspirationCaroucel;
