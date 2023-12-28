export const IMG_URL = "https://image.tmdb.org/t/p/original";
export const language = "language=pt-BR";
export const authorization = process.env.NEXT_PUBLIC_API_KEY;
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${authorization}`,
  },
};

export function randomId() {
  const random = Math.floor(Math.random() * 1000) + 1;
  return random;
}

export async function fetchMovieData() {
  let data = null;

  while (!data) {
    const random = randomId();
    const BASE_URL = `https://api.themoviedb.org/3/movie/${random}?${language}`;

    try {
      const response = await fetch(BASE_URL, options);
      if (response.ok) {
        data = await response.json();
      } else {
        console.error("erro na leitura");
      }
    } catch (e) {
      console.error("Erro ao buscar dados do filme:", e);
    }
  }

  return (
    console.log(data),
    {
      title: data.title,
      overview: data.overview,
      poster: IMG_URL + data.poster_path,
      id: data.id,
      vote: Math.floor(data.vote_average * 10),
      releaseDate: data.release_date.substring(0, 4),
    }
  );
}
