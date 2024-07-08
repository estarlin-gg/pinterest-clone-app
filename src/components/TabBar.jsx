import { MdHomeFilled } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

import { AiFillMessage } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Search } from "./Search";
import { useImage } from "../context/ImageProvider";
import { MdAccountCircle } from "react-icons/md";

export const TabBar = () => {
  const { setIsOpen } = useImage();

  return (
    <>
      <nav className="w-full py-2 sm:rounded-full  fixed bottom-0  z-50 shadow-lg bg-slate-100  xl:hidden  sm:bottom-4  sm:left-1/2 sm:transform sm:-translate-x-1/2  sm:px-4  sm:w-fit ">
        <ul className="flex items-center justify-around sm:gap-10">
          <li>
            <Link
              to={"/"}
              className="text-xs font-medium capitalize flex flex-col items-center px-4 "
            >
              <MdHomeFilled size={28} />
              <span className=" mt-1">Home</span>
            </Link>
          </li>
          <li
            className="text-xs font-medium capitalize flex flex-col items-center px-4 cursor-pointer "
            onClick={() => setIsOpen(true)}
          >
            <IoMdSearch color="gray" size={28} />
            <span className=" mt-1">Search</span>
          </li>
          <li>
            <Link
              to={"/"}
              className="text-xs font-medium capitalize flex flex-col items-center px-4 "
            >
              <AiFillMessage color="gray" size={28} />
              <span className=" mt-1">Notifications</span>
            </Link>
          </li>
          <li>
            <Link
              to={"/"}
              className="text-xs font-medium capitalize flex flex-col items-center px-4"
            >
              <MdAccountCircle color="gray" size={28} />
              <span className=" mt-1">Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Search />
    </>
  );
};
