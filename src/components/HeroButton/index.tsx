type HeroButtonProps = {
  label: string;
};
const HeroButton = ({ label }: HeroButtonProps) => {
  return (
    <button className="h-18.5 w-55.5 max-xxs:w-45 bg-over-secundary uppercase font-bold font-poppins text-[16px] text-primary cursor-pointer hover:bg-over-secundary/90 hover:tracking-widest transition">
      {label}
    </button>
  );
};
export default HeroButton;
