import { ButtonHTMLAttributes } from "react";
import { PiFilmSlate } from "react-icons/pi";
import { useMovie } from "../../../context/MovieContext";

export default function Button({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <div
      className={`relative my-8 active:scale-90 hover:contrast-[.90] cursor-pointer
     `}
    >
      <div
        className="absolute 
      -inset-1 opacity-40 bg-blur-secondary rounded-lg blur-sm
      transition-colors duration-700 ease-in-out

      "
      ></div>
      <button
        className="
        relative flex 
        bg-element-1 divide-x divide-content leading-none items-center
        py-2 px-6 rounded-md disabled:cursor-not-allowed 
        transition-all duration-700 ease-in-out

        "
        {...rest}
      >
        <span className="pr-3 text-content font-light">Encontrar filme!</span>
        <span className="pl-3 text-content font-light">
          <PiFilmSlate size={24} />
        </span>
      </button>
    </div>
  );
}
