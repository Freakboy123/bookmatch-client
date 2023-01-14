import Logo from "../images/bookmatch-logo.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";

import { useLayoutEffect, useState, useEffect } from "react";
function useWindowWidth() {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  return width;
}
const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const width = useWindowWidth();
  useEffect(() => {
    if (window.innerWidth > 750 && drawerOpen) {
      setDrawerOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width]);
  const CompressedNavBar = () => {
    return (
      <nav className="font-Outfit  items-center justify-between p-4">
        <ul className="flex flex-col">
          <li className="px-5 py-5 hover:bg-slate-200">
            <Link
              to="/"
              className=" text-black hover:rounded-lg     hover:text-slate-900 "
            >
              Home
            </Link>
          </li>
          <li className="px-5 py-5 hover:bg-slate-200">
            <a
              href="#saved"
              className=" text-black hover:rounded-lg hover:bg-slate-200  hover:text-slate-900 "
            >
              Saved List
            </a>
          </li>
          <li className="px-5 py-5 hover:bg-slate-200">
            <a
              href="#gallery"
              className=" text-black hover:rounded-lg hover:rounded-lg hover:bg-slate-200  hover:text-slate-900 "
            >
              Recommendations
            </a>
          </li>

          <li className="px-5 py-5 hover:bg-slate-200">
            <Link
              to="/quiz"
              className=" text-black hover:rounded-lg hover:bg-slate-200  hover:text-slate-900 "
            >
              Quiz
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  if (width >= 750) {
    return (
      <nav className="font-Outfit flex items-center justify-between p-4">
        <img src={Logo} className="h-[60px]" />
        <ul className="flex pr-5">
          <li>
            <Link
              to="/"
              className=" text-black hover:rounded-lg hover:bg-slate-200 px-5 py-5   hover:text-slate-900 "
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#saved"
              className=" text-black hover:rounded-lg hover:bg-slate-200 px-5 py-5   hover:text-slate-900 "
            >
              Saved List
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              className=" text-black hover:rounded-lg hover:bg-slate-200 px-5 py-5   hover:text-slate-900 "
            >
              Recommendations
            </a>
          </li>

          <li>
            <Link
              to="/quiz"
              className=" text-black hover:rounded-lg hover:bg-slate-200 px-5 py-5   hover:text-slate-900 "
            >
              Quiz
            </Link>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <div className="pb-10">
        <div className="flex justify-between">
          <img src={Logo} className="h-20" alt="BookMatch logo" />

          <div
            className="hover:bg-slate-100 hover:rounded-lg cursor-pointer m-4 p-3"
            onClick={() => {
              setDrawerOpen(!drawerOpen);
            }}
          >
            <ReorderIcon style={{ color: "black" }} />
          </div>
        </div>
        {drawerOpen && <CompressedNavBar />}
      </div>
    );
  }
};

export default NavBar;
