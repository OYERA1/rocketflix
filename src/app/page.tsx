"use client";

import Main from "@/components/main";
import Resume from "@/components/resume";
import Button from "@/components/button";
import ThemeSwticher from "@/components/themeswitcher";
import { useMovie } from "../../context/MovieContext";

export default function Home() {
  const { movieData, getMovieData } = useMovie();

  return (
    <Main>
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

        <Button onClick={getMovieData} />

        {movieData ? (
          ""
        ) : (
          <span className="text-center">
            Clique em "Encontrar filme" que te traremos informações de algum
            filme para você assistir hoje!
          </span>
        )}
      </div>
    </Main>
  );
}
