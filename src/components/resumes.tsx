import Image from "next/image";
import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";

export default function Resume() {
  const { movieData } = useContext(MovieContext);
  return (
    <main className="flex flex-wrap flex-col items-center gap-10 m-10 w-[1000px] h-[400px]">
      <span className="font-bold text-2xl">
        {movieData ? movieData.title : "carregando..."}
      </span>
      <div className="flex flex-col sm:flex-row gap-16 items-start px-10">
        <Image
          src={movieData ? movieData.poster : "carregando..."}
          alt={movieData ? movieData.title : "carregando..."}
          height={300}
          width={200}
          className="sm:max-w-max sm:max-h-max"
        />
        <span className="">
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
