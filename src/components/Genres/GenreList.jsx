/* eslint-disable react/prop-types */
import useGenres from "../../hooks/useGenres";
import LoadingSpinner from "../LoadingSpinner";
import GenreButton from "./GenreButton";

const GenreList = ({ onSelectGenre }) => {
  const { data, isLoading } = useGenres(); // جلب بيانات الأنواع

  if (isLoading) return <LoadingSpinner />; // عرض مؤشر التحميل إذا كانت البيانات قيد التحميل

  return (
    <div className="flex flex-wrap justify-center lg:flex-col lg:items-start p-4">
      {data?.results?.map((genre) => (
        <GenreButton key={genre.id} genre={genre} onSelectGenre={onSelectGenre} /> 
      ))}
    </div>
  );
};

export default GenreList;
