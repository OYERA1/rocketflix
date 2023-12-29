"use client";

import { fetchMovieData } from "@/api/api";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

export interface MovieDataType {
  title?: string | null;
  overview?: string;
  poster?: string;
  id?: number;
  vote?: number | null;
  releaseDate?: string | null;
}

type MovieContextType = {
  movieData: MovieDataType | null;
  stagedData: MovieDataType[];
  getMovieData: () => void;
};

const initialValue: MovieContextType = {
  movieData: null,
  stagedData: [],
  getMovieData: async () => null,
};

export const MovieContext = createContext<MovieContextType>(initialValue);

export const MovieContextProvider = ({ children }: { children: ReactNode }) => {
  const [movieData, updateMovieData] = useState<MovieDataType | null>(null);
  const [stagedData, setStagedData] = useState<MovieDataType[]>([]);

  async function loadMovieData() {
    try {
      if (stagedData.length >= 5) {
        return;
      } else {
        const data = await fetchMovieData();
        if (data) {
          setStagedData([...stagedData, data]);
        }
      }
    } catch (error) {
      console.error("Erro ao obter dados do filme:", error);
    }
  }

  useEffect(() => {
    loadMovieData();
  }, [stagedData]);

  function getMovieData() {
    for (let i = 0; i < stagedData.length; i++) {
      if (!stagedData[i]) {
        i++;
        updateMovieData(stagedData[i]);
      }
      updateMovieData(stagedData[i]);
      setStagedData([]);
      loadMovieData();
    }
  }

  return (
    <MovieContext.Provider value={{ movieData, getMovieData, stagedData }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => {
  const context = useContext(MovieContext);
  if (!context) {
    throw new Error("Erro no useContext");
  }
  return context;
};
