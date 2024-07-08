import { Button, Drawer } from "flowbite-react";
import { useImage } from "../context/ImageProvider";

export const Search = () => {
  const { isOpen, handleClose, inputRef, handleKeyDown, search } = useImage();

  return (
    <Drawer open={isOpen} onClose={handleClose} position="top">
      <Drawer.Items>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            ref={inputRef}
            defaultValue={search}
            onKeyDown={handleKeyDown}
            className="w-full border-none bg-slate-100 rounded-full outline-none focus:border-none focus:outline-none"
          />
          <Button color={"failure"}>Search</Button>
        </div>
      </Drawer.Items>
    </Drawer>
  );
};
