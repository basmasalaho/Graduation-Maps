/* eslint-disable react/prop-types */
import sidBar from "../../assets/styles/SideBar.module.css";
const GenreButton = ({ genre, onSelectGenre }) => {
  return (
    <button
      type="button"
      onClick={() => onSelectGenre(genre)} // تنفيذ الدالة عند النقر على الزر
      className={sidBar.button}
    >
      <img
        src={genre.image_background} // عرض صورة النوع
        alt={genre.name} // نص بديل لصورة النوع
        className={sidBar.img}
      />
      <span className={sidBar.text}>
        {genre.name}  
      </span>
    </button>
  );
};

export default GenreButton;
