"use client";

import Resume from "@/components/resume";
import ThemeSwticher from "@/components/themeswitcher";
import { useMovie } from "../../context/MovieContext";

export default function Home() {
  const { movieData, getMovieData } = useMovie();

  return (
    <main
      className="flex flex-col flex-wrap min-h-screen max-h-full max-w-full
      px-6 py-3 sm:px-28 items-center justify-center
      bg-bkg-primary text-content isolate before:absolute before:h-[200px]
      before:w-8/12 before:rounded-tr-full before:rounded-bl-full before:blur-[80px]
      before:bg-gradient-2 before:animate-spin-slower before:-z-10
      after:absolute after:h-2/3 after:w-1/3
      after:rounded-tr-full after:rounded-bl-full after:blur-3xl
      after:bg-gradient-1/80 after:animate-spin-slow after:-z-10
      "
    >
      <ThemeSwticher className="flex w-full justify-end mb-10" />
      <div
        className="flex flex-col items-center py-5 px-10 bg-blue-950 rounded-md
        backdrop-filter backdrop-blur-xl bg-opacity-20 border-2 border-slate-600"
      >
        {movieData ? (
          <Resume />
        ) : (
          <div className="flex w-full mb-16">
            <span className=" text-center w-full font-semibold text-xl">
              Não sabe o que assistir?
            </span>
          </div>
        )}

        <button
          className=" border-zinc-500 border-2 p-3 rounded-md mb-10 hover:opacity-90 active:scale-90"
          onClick={getMovieData}
        >
          Encontrar filme!
        </button>

        {movieData ? (
          ""
        ) : (
          <span className="text-center">
            Clique em "Encontrar filme" que te traremos informações de algum
            filme para você assistir hoje!
          </span>
        )}
      </div>
    </main>
  );
}
