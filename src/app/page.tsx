"use client";

import Main from "@/components/main";
import Resume from "@/components/resume";
import Button from "@/components/button";
import ThemeSwticher from "@/components/themeswitcher";
import { useMovie } from "../../context/MovieContext";
import { useEffect, useState } from "react";

export default function Home() {
  const { movieData, getMovieData, stagedData } = useMovie();
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    if (stagedData) {
      setIsMounted(true);
    }
  });

  if (!isMounted) {
    return (
      <Main>
        <p className="text-content">Loading...</p>
      </Main>
    );
  }
  return (
    <Main>
      <div>
        <ThemeSwticher className="flex w-full justify-end mb-10" />
        <div
          className="flex flex-col items-center py-5 px-10 bg-blue-950 rounded-md
        backdrop-filter backdrop-blur-xl bg-opacity-20 border-2 border-slate-600"
        >
          {movieData ? (
            <Resume />
          ) : (
            <span className="mb-16 text-center w-full font-semibold text-xl">
              Não sabe o que assistir?
            </span>
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
      </div>
    </Main>
  );
}
