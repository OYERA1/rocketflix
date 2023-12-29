"use client";

import { useTheme } from "next-themes";
import { TbSunHigh, TbMoonStars } from "react-icons/tb";

export default function ThemeSwticher({ className }: any) {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`${className}`}>
      <label htmlFor="darkmode" className="cursor-pointer ">
        {theme === "dark" ? (
          <TbSunHigh
            size={23}
            className="text-yellow-600 active:animate-spin"
          />
        ) : (
          <TbMoonStars
            size={23}
            className="text-indigo-600 active:animate-spin"
          />
        )}
      </label>
      <input
        type="checkbox"
        onChange={handleToggleTheme}
        checked={theme === "dark"}
        name="darkmode"
        id="darkmode"
        className="hidden"
      />
    </div>
  );
}
