import BookCard from "./BookCard";
import { useState, useRef, useContext, useEffect } from "react";
import "./SavedList.css";
import { SavedListContext } from "../App";
import { RecommendationsContext } from "../App";

const BookPopup = ({ book }) => {
  const [savedList, setSavedList] = useContext(SavedListContext);
  const handleSavedBtn = (book) => {
    for (let i = 0; i < savedList.length; i++) {
      console.log(savedList[i].isbn13, book.isbn13);
      if (savedList[i].isbn13 === book.isbn13) {
        alert("Already in List!");
        return;
      }
    }
    setSavedList([...savedList, book]);

    alert("Book Added!");
  };
  useEffect(() => {
    console.log(savedList);
    localStorage.setItem("savedList", JSON.stringify(savedList));
  }, [savedList]);
  if (book) {
    return (
      <div className="font-Outfit pb-5 ">
        <div className="flex flex-col p-5 flex-wrap justify-center items-center">
          <img
            src={book.thumbnail}
            alt="book"
            id="main-image"
            className=" shadow-[0px_5px_11px_8px_rgba(0,0,0,0.08)] h-[300px] rounded-md"
          />

          <div className=" p-5  w-[500px] flex flex-col justify-center items-center">
            <div className="font-bold text-[30px]">{book.title}</div>
            <div>{book.authors}</div>
            <div>{book.average_rating}/5</div>
            <div className="font-light pt-10">{book.description}</div>
            <div className="flex flex-col w-full p-5">
              <div className=" flex justify-between">
                <div>Categories</div>
                <div>{book.categories}</div>
              </div>
              <div className=" flex justify-between">
                <div>ISBN</div>
                <div>{book.isbn13}</div>
              </div>
              <div className=" flex justify-between">
                <div>Numnber of pages</div>
                <div>{book.num_pages}</div>
              </div>
              <div className=" flex justify-between">
                <div>Year Published</div>
                <div>{book.published_year}</div>
              </div>
              <div className=" flex justify-between">
                <div>Number of Ratings</div>
                <div>{book.ratings_count}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            className="p-4 bg-[#121212] rounded-md text-white hover:bg-slate-400"
            onClick={() => {
              handleSavedBtn(book);
            }}
          >
            Added to Saved List
          </button>
        </div>
        <div className="image-gallery"></div>
      </div>
    );
  }
};

const RecommendedBooks = () => {
  const [recommended, setRecommended] = useContext(RecommendationsContext);
  const popupControl = useRef(null);
  const [bookOpened, setBookOpened] = useState(null);
  useEffect(() => {
    const recommendedStorage = JSON.parse(localStorage.getItem("books"));
    if (recommendedStorage) {
      console.log(recommendedStorage);
      setRecommended(recommendedStorage);
    }
  }, []);
  const handleCloseClick = () => {
    document.body.style.overflowY = "auto";
    popupControl.current.style.display = "none";
  };
  const handleOpenClick = (book) => {
    console.log(book);
    popupControl.current.style.display = "block";
    document.body.style.overflowY = "hidden";
    setBookOpened(book);
  };

  return (
    <div id="gallery" className="font-Outfit flex flex-col bg-[#faf1d7] pb-10">
      <h2 className="text-center p-10 text-[40px] font-bold drop-shadow-md text-[#0762ad]">
        Top Picks for You
      </h2>
      <div
        className={
          recommended.length &&
          "projects-section pl-10 grid grid-cols-4 gap-4 gap-y-[30px]"
        }
      >
        {recommended.length ? (
          recommended.map((book) => {
            return (
              <BookCard
                book={book}
                onClick={() => {
                  handleOpenClick(book);
                }}
              />
            );
          })
        ) : (
          <p className="opacity-50 text-center text-lg">
            No Recommended books yet.
          </p>
        )}
      </div>
      <div id="overlay" ref={popupControl}>
        <div className="bg-white  max-h-[80vh] max-w-[50vw] absolute top-0 bottom-0 left-0 right-0 m-auto rounded-md overflow-y-auto">
          <button
            onClick={handleCloseClick}
            className="text-[#e85046] m-5 pt-1 pb-1 pr-2 pl-2 text-[20px] border-2 border-[#e85046] shadow-md rounded-lg hover:shadow-[0px_5px_11px_8px_rgba(240,0,0,0.1)]"
          >
            x
          </button>
          <div>
            <BookPopup book={bookOpened} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedBooks;
