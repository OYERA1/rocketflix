"use client";

import { NextResponse } from "next/server";

const value = process.env.NEXT_PUBLIC_API_KEY;

export const IMG_URL = "https://image.tmdb.org/t/p/w500";
export const language = "language=pt-BR";

export async function fetchMovieData(movieId) {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}?${language}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${value}`,
    },
  };

  try {
    const response = await fetch(BASE_URL, options);

    if (!response.ok) {
      throw new Error("Erro na leitura");
    }

    const data = await response.json();

    return (
      console.log(data),
      {
        title: data.title,
        overview: data.overview,
        poster: IMG_URL + data.poster_path,
        id: data.id,
      }
    );
  } catch (e) {
    return null;
  }
}
