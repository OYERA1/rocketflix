"use client";

import { ReactNode, createContext, useContext, useState } from "react";
import { fetchMovieData } from "@/api/api";

export interface MovieDataType {
  title: string;
  overview: string;
  poster: string;
  id: number;
  vote: number | null;
  releaseDate: string | null;
}

type MovieContextType = {
  movieData: MovieDataType | null;
  updateMovieData: (newState: MovieDataType | null) => void;
  getMovieData: () => Promise<void>;
};

const initialValue: MovieContextType = {
  movieData: null,
  updateMovieData: () => {},
  getMovieData: async () => {},
};

export const MovieContext = createContext<MovieContextType>(initialValue);

export function MovieContextProvider({ children }: { children: ReactNode }) {
  const [movieData, updateMovieData] = useState<MovieDataType | null>(null);

  const getMovieData = async () => {
    const data = await fetchMovieData();
    updateMovieData(data);
  };
  return (
    <MovieContext.Provider value={{ movieData, updateMovieData, getMovieData }}>
      {children}
    </MovieContext.Provider>
  );
}

export const useMovie = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("Erro no useContext");
  }
  return context;
};
