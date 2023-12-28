import Image from "next/image";
import { Circle } from "../circle";
import React, { useState } from "react";
import { MovieDataType } from "../../../context/MovieContext";

interface MovieDataProps {
  movieData: MovieDataType | null;
}

export default function ImageComponent({ movieData }: MovieDataProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col relative">
      <Image
        alt={movieData ? movieData.title : "carregando..."}
        className={`max-w-max max-h-max rounded-xl ${!isLoaded && "hidden"}`}
        height={300}
        loading="eager"
        onLoadingComplete={(img) => setIsLoaded(true)}
        onLoadStart={(img) => setIsLoaded(false)}
        src={movieData ? movieData.poster : ""}
        width={200}
      />
      {isLoaded && (
        <div className="absolute -translate-y-4 -translate-x-6 sm:top-1/2 transform sm:-translate-x-1/4 sm:translate-y-[110px]">
          <Circle percentage={movieData?.vote} circleWidth={50} />
        </div>
      )}
    </div>
  );
}
