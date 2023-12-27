"use client";

import Resume from "@/components/resumes";
import { useMovie } from "../../context/MovieContext";

export default function Home() {
  const { movieData, getMovieData } = useMovie();

  return (
    <main
      className="flex flex-col flex-wrap min-h-screen max-h-max px-6 py-3 sm:px-28 justify-center items-center
      bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]
     from-slate-700 via-slate-800 to-slate-900"
    >
      <div
        className="flex flex-col items-center py-5 px-10 bg-zinc-500 rounded-md
        backdrop-filter backdrop-blur-sm bg-opacity-10"
      >
        {movieData ? (
          <Resume />
        ) : (
          <span className="mb-16 font-semibold text-xl text-center">
            Não sabe o que assistir?
          </span>
        )}

        <button
          className="bg-zinc-950 border-zinc-500 border-2 p-3 rounded-md mb-10 hover:bg-zinc-700 active:scale-90"
          onClick={getMovieData}
        >
          Encontrar filme!
        </button>

        {movieData ? (
          ""
        ) : (
          <span className="text-center break-before-auto">
            Clique em "Encontrar filme" que te traremos informações de algum
            filme para você assistir hoje!
          </span>
        )}
      </div>
    </main>
  );
}
