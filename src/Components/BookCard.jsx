import "./Book.css";
import "./SavedList.css";

const BookCard = ({ book, onClick }) => {
  return (
    <div
      className="project-media grow w-[20vw] h-[500px] shadow-[-1px_2px_11px_5px_rgba(0,0,0,0.05)] rounded-md border-2 flex flex-col items-center bg-white p-5"
      onClick={onClick}
    >
      <img src={book.thumbnail} alt="book thumbnail" />

      <p className="font-bold p-3">{book.title}</p>
      <p>{book.authors}</p>
      <p className="opacity-60 ellipsis overflow-hidden">{book.description}</p>
      <p className="p-4">Rating: {book.average_rating}/5</p>
    </div>
  );
};

export default BookCard;
