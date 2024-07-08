import { Avatar } from "flowbite-react";
import { FaPinterest } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { useImage } from "../context/ImageProvider";

export const NavBar = () => {
  const { handleKeyDown, search, setSearch, inputRef } = useImage();

  return (
    <header className="py-2 px-8 hidden xl:flex items-center gap-4">
      <FaPinterest color="red" size={37} />
      <div className="flex gap-6 items-center">
        <a href="#" className="bg-black text-white p-3 rounded-full">
          Home
        </a>
        <a href="#" className="text-lg font-medium">
          Explore
        </a>
        <a href="#" className="text-lg font-medium">
          Create
        </a>
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder="Search"
          ref={inputRef}
          defaultValue={search}
          onKeyDown={handleKeyDown}
          className="w-full border-none bg-slate-100 rounded-full outline-none focus:border-none focus:outline-none"
        />
      </div>
      <div className="flex gap-2 items-center">
        <AiFillMessage
          color="gray"
          size={50}
          className="cursor-pointer hover:bg-gray-200 rounded-full p-2"
        />
        <IoMdNotifications
          color="gray"
          size={50}
          className="cursor-pointer hover:bg-gray-200 rounded-full p-2"
        />
        <Avatar
          className="cursor-pointer hover:bg-gray-200 rounded-full p-2"
          rounded
          size={"md"}
        />
      </div>
    </header>
  );
};
