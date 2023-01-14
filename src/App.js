import "./App.css";
import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
export const SavedListContext = createContext();

function App() {
  const [savedList, setSavedList] = useState([
    {
      authors: "Agatha Christie",
      average_rating: 4.27,
      categories: "Authors, English",
      description:
        "An Autobiography is the title of the recollections of crime writer Agatha Christie published posthumously by Collins in the UK and by Dodd, Mead & Company in the US in November 1977, almost two years after the writer's death in January 1976. The UK edition retailed at £7.95 and the US edition at $15.00.",
      isbn10: "0006353282",
      isbn13: 9780006353287,
      num_pages: 560.0,
      published_year: 1977.0,
      ratings_count: 3975.0,
      thumbnail:
        "http://books.google.com/books/content?id=c49GQwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "An Autobiography",
    },
    {
      authors: "Agatha Christie",
      average_rating: 4.27,
      categories: "Authors, English",
      description:
        "An Autobiography is the title of the recollections of crime writer Agatha Christie published posthumously by Collins in the UK and by Dodd, Mead & Company in the US in November 1977, almost two years after the writer's death in January 1976. The UK edition retailed at £7.95 and the US edition at $15.00.",
      isbn10: "0006353282",
      isbn13: 9780006353287,
      num_pages: 560.0,
      published_year: 1977.0,
      ratings_count: 3975.0,
      thumbnail:
        "http://books.google.com/books/content?id=c49GQwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "An Autobiography",
    },
    {
      authors: "Agatha Christie",
      average_rating: 4.27,
      categories: "Authors, English",
      description:
        "An Autobiography is the title of the recollections of crime writer Agatha Christie published posthumously by Collins in the UK and by Dodd, Mead & Company in the US in November 1977, almost two years after the writer's death in January 1976. The UK edition retailed at £7.95 and the US edition at $15.00.",
      isbn10: "0006353282",
      isbn13: 9780006353287,
      num_pages: 560.0,
      published_year: 1977.0,
      ratings_count: 3975.0,
      thumbnail:
        "http://books.google.com/books/content?id=c49GQwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "An Autobiography",
    },
    {
      authors: "Agatha Christie",
      average_rating: 4.27,
      categories: "Authors, English",
      description:
        "An Autobiography is the title of the recollections of crime writer Agatha Christie published posthumously by Collins in the UK and by Dodd, Mead & Company in the US in November 1977, almost two years after the writer's death in January 1976. The UK edition retailed at £7.95 and the US edition at $15.00.",
      isbn10: "0006353282",
      isbn13: 9780006353287,
      num_pages: 560.0,
      published_year: 1977.0,
      ratings_count: 3975.0,
      thumbnail:
        "http://books.google.com/books/content?id=c49GQwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "An Autobiography",
    },
    {
      authors: "Agatha Christie",
      average_rating: 4.27,
      categories: "Authors, English",
      description:
        "An Autobiography is the title of the recollections of crime writer Agatha Christie published posthumously by Collins in the UK and by Dodd, Mead & Company in the US in November 1977, almost two years after the writer's death in January 1976. The UK edition retailed at £7.95 and the US edition at $15.00.",
      isbn10: "0006353282",
      isbn13: 9780006353287,
      num_pages: 560.0,
      published_year: 1977.0,
      ratings_count: 3975.0,
      thumbnail:
        "http://books.google.com/books/content?id=c49GQwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
      title: "An Autobiography",
    },
  ]);
  return (
    <SavedListContext.Provider value={[savedList, setSavedList]}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        {/* Each Route elemenet specifies a path in a specific page of the website  */}
      </Routes>
    </SavedListContext.Provider>
  );
}

export default App;
