"use client";

import { useState } from "react";
import { fetchMovieData } from "@/api/api";

import Image from "next/image";
import styles from "../../styles/Page.module.css";
import logo from "../../public/logo.png";
import Resumes from "@/components/resumes";

interface MovieDataType {
  title: string;
  poster: string;
  overview: string;
}

export default function Home() {
  const [movieData, setMovieData] = useState<MovieDataType | null>(null);
  async function handle() {
    let movie = null;

    while (!movie) {
      const random = Math.floor(Math.random() * 1000) + 1;

      const data = await fetchMovieData(random);

      if (data) {
        movie = data;
        console.log(data);
      } else {
        console.log("tentando dnv", random);
      }
    }
    setMovieData(movie);
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <Image src={logo} alt="logo do site" width={87.24} height={62.93} />
        <span className={styles.title}>Não sabe o que assistir?</span>

        {movieData && (
          <Resumes
            posters={movieData.poster}
            title={movieData.title}
            resumeText={movieData.overview}
          />
        )}
        <button className={styles.buttonStyle} onClick={handle}>
          Encontrar filme
        </button>
        <span className={styles.subtitle}>
          Clique em "Encontrar filme que te traremos informações de alugm filme
          para você assistir hoje
        </span>
      </div>
    </div>
  );
}
