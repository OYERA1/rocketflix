import { MovieDataType } from "../../context/MovieContext";

const IMG_URL = "https://image.tmdb.org/t/p/original";
const authorization = process.env.NEXT_PUBLIC_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${authorization}`,
  },
};

export async function fetchMovieData() {
  const random = Math.floor(Math.random() * 1000);
  try {
    const BASE_URL = `https://api.themoviedb.org/3/movie/${random}?language=pt-BR`;
    const response = await fetch(BASE_URL, options);
    const data = await response.json();

    return {
      title: data.title,
      overview: data.overview,
      poster: IMG_URL + data.poster_path,
      vote: Math.round(data.vote_average * 10),
      releaseDate: data.release_date.substring(0, 4),
    };
  } catch (e) {
    console.error(e);
  }
}
