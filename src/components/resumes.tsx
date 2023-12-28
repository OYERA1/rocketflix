import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../context/MovieContext";
import ImageComponent from "./Image";
import ThemeSwticher from "./ThemeSwitcher";

export default function Resume() {
  const { movieData } = useContext(MovieContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <main className="flex flex-col items-center  sm:justify-center gap-10 sm:m-10 sm:w-[1000px] sm:h-[400px]">
      <span className="font-bold text-2xl text-center">
        {movieData
          ? `${movieData.title} (${movieData.releaseDate})`
          : "carregando..."}
      </span>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-16 items-center sm:items-start sm:px-10">
        <ImageComponent movieData={movieData} />
        <span className="text-center mb-4 sm:mb-0 sm:text-start ">
          {movieData
            ? movieData.overview == ""
              ? "Este filme não possui um resumo."
              : movieData.overview
            : "carregando..."}
        </span>
      </div>
    </main>
  );
}
