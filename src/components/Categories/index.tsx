import clsx from "clsx";

const Categories = () => {
  return (
    <div className={clsx("flex items-center flex-col")}>
      <div className={clsx("flex items-center flex-col", "pt-[56.47px] pb-[62.29px] px-4")}>
        <h1
          className={clsx(
            "text-primary-text text-[32px] font-poppins font-bold text-center",
          )}
        >
          Browse The Range
        </h1>
        <p className={clsx("text-primary-text-100 text-[20px] font-poppins text-center")}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};
export default Categories;
