import { Button } from "flowbite-react";
import { FaShare } from "react-icons/fa";
import { LuMoreHorizontal } from "react-icons/lu";

export const Image = ({ url, alt, classes }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl ">
      <img src={url} alt={alt} className={classes}  />
      <div className="bg-black/60 absolute hidden group-hover:flex transition-all flex-col justify-between items-end p-4 inset-0 ">
        <div className="">
          <Button color={"failure"} size={"lg"} pill className="">
            Guardar
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <FaShare
            size={32}
            className="rounded-full bg-white p-2 cursor-pointer"
          />
          <LuMoreHorizontal
            size={32}
            className="rounded-full bg-white p-1 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
