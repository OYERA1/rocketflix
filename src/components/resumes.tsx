import Image from "next/image";
import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

export default function Resume() {
  const { movieData } = useContext(MovieContext);
  return (
    <main className="flex flex-wrap flex-col items-center gap-10 sm:m-10 sm:w-[1000px] sm:h-[400px]">
      <span className="font-bold text-2xl text-center">
        {movieData ? movieData.title : "carregando..."}
      </span>
      <div className="flex flex-wrap flex-col sm:flex-row gap-6 sm:gap-16 items-center sm:items-start sm:px-10">
        <Image
          src={movieData ? movieData.poster : "carregando..."}
          alt={movieData ? movieData.title : "carregando..."}
          height={300}
          width={200}
          className="max-w-max max-h-max rounded-xl"
        />
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
