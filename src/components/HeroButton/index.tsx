import clsx from "clsx";

type HeroButtonProps = {
  label: string;
};
const HeroButton = ({ label }: HeroButtonProps) => {
  return (
    <button
      className={clsx(
        "h-18.5 w-55.5",
        "max-xxs:w-40 max-xxs:h-14",
        "uppercase font-bold font-poppins text-[16px] text-primary",
        "cursor-pointer hover:bg-over-secundary/90 hover:tracking-widest transition",
        "bg-over-secundary",
      )}
    >
      {label}
    </button>
  );
};
export default HeroButton;
