import { MovieDataType } from "../../../context/MovieContext";

interface TitleProps extends MovieDataType {
  className?: string;
}

const Title = ({ title, releaseDate, className }: TitleProps) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      <p>({releaseDate})</p>
    </div>
  );
};

export default Title;
