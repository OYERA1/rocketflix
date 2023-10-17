"use client";

import { NextResponse } from "next/server";

export const API_KEY = "api_key=a9a217cc309593e5b13e3a23c88ead86";
export const IMG_URL = "https://image.tmdb.org/t/p/w500";
export const language = "language=pt-BR";

export async function fetchMovieData(movieId) {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}?${API_KEY}`;

  try {
    const response = await fetch(BASE_URL, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Erro na leitura");
    }

    const data = await response.json();

    return {
      title: data.title,
      overview: data.overview,
      poster: IMG_URL + data.poster_path,
      id: data.id,
    };
  } catch (e) {
    return null;
  }
}
