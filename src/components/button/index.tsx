import { ButtonHTMLAttributes } from "react";
import { PiFilmSlate } from "react-icons/pi";

export default function Button({
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="
      flex divide-x divide-gray-600 leading-none items-center
      border-zinc-500 border-2 py-2 px-6 rounded-md mb-10 
      hover:opacity-90 active:scale-90"
      {...rest}
    >
      <span className="pr-3">Encontrar filme!</span>
      <span className="pl-3">
        <PiFilmSlate size={24} />
      </span>
    </button>
  );
}
