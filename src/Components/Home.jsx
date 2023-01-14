import NavBar from "./NavBar";
import "./Home.css";
import HomeBg from "../images/home-bg.png";
import { Link } from "react-router-dom";
import SavedList from "./SavedList";
import RecommendedBooks from "./RecommendedBooks";

const Home = () => {
  return (
    <div>
      <div id="home">
        {/* nav bar */}
        <NavBar />
        <div className="flex flex-col justify-center items-center font-Outfit">
          <h1 className="text-center font-Outfit text-[50px] drop-shadow-lg">
            Welcome to <br />
            <h1 className="font-bold">BookMatch</h1>
          </h1>
          <div>
            <p className="text-center font-Outfit drop-shadow-sm m-[20px]">
              The best website for teenagers to find their next favourite book!
            </p>
          </div>
          <Link
            to="/quiz"
            className="mt-[30px] p-5 bg-[#121212] hover:bg-[#404241] text-white rounded-md"
          >
            Find the books for you!
          </Link>
          <img src={HomeBg} className="h-[400px] mt-10 drop-shadow-lg" />
        </div>
      </div>
      <SavedList />
      <RecommendedBooks />
    </div>
  );
};

export default Home;
