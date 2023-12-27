import Image from "next/image";
import { MovieDataType } from "../../context/MovieContext";
import { Circle } from "./circle";

interface MovieDataProps {
  movieData: MovieDataType | null;
}

export default function ImageComponent({ movieData }: MovieDataProps) {
  return (
    <div className="flex flex-col">
      <Image
        src={movieData ? movieData.poster : "carregando..."}
        alt={movieData ? movieData.title : "carregando..."}
        height={300}
        width={200}
        className=" max-w-max max-h-max rounded-xl"
      />
      <div className="absolute -translate-y-4 -translate-x-6 sm:top-1/2 transform sm:-translate-x-1/4 sm:translate-y-[110px]">
        <Circle percentage={movieData?.vote} circleWidth={50} />
      </div>
    </div>
  );
}
