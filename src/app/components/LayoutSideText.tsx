"use client"
import useHome from "./useHome";

function LayoutSideText() {
  const { currentView } = useHome();

  const options: any = {
    "base-converter": "Convert number to any base of choice",
    "base-calculator": "Base Buster: Convert and Calculate Across Numerical Bases",
  };
  return (
    <div className="h-full hidden lg:flex flex-col items-center justify-center px-5 leading-[40px] bg-yellow1 text-3xl font-semibold">
      {options[currentView]}
    </div>
  );
}

export default LayoutSideText;
