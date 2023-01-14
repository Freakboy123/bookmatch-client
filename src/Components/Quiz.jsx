import { useEffect } from "react";
import { useRef, useState, useContext } from "react";
import "./Quiz.css";
import { RecommendationsContext, UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const likes = [];
  const [user] = useContext(UserContext);
  const navigate = useNavigate();
  const [setRecommended] = useContext(RecommendationsContext);
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: user }),
    };
    fetch("https://bookmatch.pythonanywhere.com/suggest", requestOptions)
      .then((response) => response.json())
      .then((data) => setSuggestions(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const BookModel = ({ book, idx }) => {
    const bookCard = useRef(null);
    const checkArray = () => {
      if (likes.length === 10) {
        const newLikes = likes.reverse();
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user: user,
            books: suggestions,
            likes: newLikes,
          }),
        };
        fetch("https://bookmatch.pythonanywhere.com/recommend", requestOptions)
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            setRecommended(data);
            setSuggestions([]);
            localStorage.setItem("books", JSON.stringify(data["books"]));
            localStorage.setItem("user", JSON.stringify(data["user"]));
            alert("Success! Go checkout your Recommended Books");
            navigate("/");
          });
      }
    };
    const handleNoClick = () => {
      console.log(bookCard.current.classList);
      bookCard.current.classList.add("bookTranslateRight");
      likes.push(0);
      checkArray();
    };
    const handleYesClick = () => {
      bookCard.current.classList.add("bookTranslateRight");
      likes.push(1);
      checkArray();
    };

    return (
      <div
        ref={bookCard}
        className={`box-model z-${
          10 - idx
        } bg-white rounded-md shadow-[0px_5px_11px_8px_rgba(0,0,0,0.05)] h-[60vh] m-10 mb-20 absolute flex flex-col justify-center items-center pl-5 pr-5 pt-10 pb-5`}
      >
        <div className="flex ">
          <img
            src={book.thumbnail}
            alt="book cover"
            className="h-[30vh] self-center object-contain"
          />
          <div className="pl-5 overflow-scroll h-[50vh]">
            <p className="p-5 font-bold text-lg">{book.title}</p>
            <p className="p-3">{book.authors}</p>
            <p className="p-2 text-sm">{book.categories}</p>
            <p className="p-2 opacity-70 ">{book.description}</p>
          </div>
        </div>
        <div className="flex justify-between w-full p-5">
          <button
            onClick={handleNoClick}
            className="text-[#e02f10] border p-2 rounded-md"
          >
            No
          </button>
          <button
            onClick={handleYesClick}
            className="text-[#32a852] border p-2 rounded-md"
          >
            Yes
          </button>
        </div>
      </div>
    );
  };

  // Wait until the animation is over and then remove the class, so that
  // the next click can re-add it.
  // setTimeout(function () {
  //   bookCard.current.classList.remove("bookTranslateLeft");
  // }, 1000);

  const [quizMode, setQuizMode] = useState(false);
  const div = useRef(null);
  const handleStartQuizBtn = () => {
    div.current.classList.add("elementToFadeInAndOut");
    // Wait until the animation is over and then remove the class, so that
    // the next click can re-add it.
    setTimeout(function () {
      div.current.classList.remove("elementToFadeInAndOut");
      setQuizMode(true);
    }, 500);
  };

  if (!quizMode) {
    return (
      <div ref={div} id="quiz" className="min-h-[100vh]">
        <div className="fade font-Outfit min-h-[100vh] text-center flex flex-col justify-between">
          <h1 className="text-center font-Outfit text-[50px] drop-shadow-lg font-bold pt-10">
            Find the Books for You
          </h1>
          <p>
            Get Started by taking our quiz and find the right books for you!
          </p>
          <div>
            <button
              onClick={handleStartQuizBtn}
              className="mt-[30px] p-5 bg-[#121212] hover:bg-[#404241] text-white rounded-md"
            >
              Start Now
            </button>
          </div>
          <img
            src={require("../images/quiz-page.png")}
            alt="books"
            className="w-[500px] self-center"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div
        id="quiz2"
        className="min-h-[120vh] font-Outfit flex flex-col items-center"
      >
        <div className="flex flex-col ">
          <h1 className="text-center font-Outfit text-[40px] drop-shadow-lg font-bold pt-10">
            Would you Read this book?
          </h1>
          <p className="text-center">
            Select Yes or No if you would be interested in reading this book
          </p>
          <div className="p-10 relative">
            {suggestions &&
              suggestions.map((book, idx) => {
                return <BookModel book={book} idx={idx} />;
              })}
          </div>
        </div>
      </div>
    );
  }
};

export default Quiz;
