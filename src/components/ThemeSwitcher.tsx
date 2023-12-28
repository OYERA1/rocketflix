"use client";

import { TbSunHigh, TbMoonStars } from "react-icons/tb";
import { useTheme } from "next-themes";

export default function ThemeSwticher({ className }: any) {
  const { theme, setTheme } = useTheme();

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`${className}`}>
      <label htmlFor="darkmode" className="skew-x-1 ">
        {theme === "dark" ? (
          <div>
            <TbSunHigh
              size={23}
              className="text-yellow-600 active:animate-spin ease-out"
            />
          </div>
        ) : (
          <TbMoonStars
            size={23}
            className="text-indigo-600 active:animate-spin ease-out"
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
