import { MovieDataType } from "../../../context/MovieContext";

const Title = ({ title, releaseDate }: MovieDataType) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>({releaseDate})</p>
    </div>
  );
};

export default Title;
