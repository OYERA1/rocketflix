import ImageComponent from "../image";
import { MovieContext } from "../../../context/MovieContext";
import { useContext, useEffect, useState } from "react";
import Title from "../title";

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
    <main className="flex flex-col sm:flex-row gap-7 sm:m-10 sm:w-[1000px] sm:h-[400px]">
      <div
        className="flex flex-col
      gap-8 break-keep
      justify-end items-center mt-4 sm:m-0 text-xl font-bold text-center"
      >
        {movieData ? (
          <Title
            className={`sm:hidden `}
            title={movieData.title}
            releaseDate={movieData.releaseDate}
          />
        ) : (
          "carregando..."
        )}
        <ImageComponent movieData={movieData} />
      </div>

      <div className="flex flex-col sm:gap-8  items-center sm:px-10">
        <div className="font-bold text-2xl text-center">
          {movieData ? (
            <Title
              className="hidden sm:block"
              title={movieData.title}
              releaseDate={movieData.releaseDate}
            />
          ) : (
            "carregando..."
          )}
        </div>

        <span className="flex flex-wrap mb-4 text-justify sm:mb-0 sm:text-start sm:min-w-[645px]">
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
