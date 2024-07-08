import { Button, Drawer } from "flowbite-react";
import { useImage } from "../context/ImageProvider";
import { InputSearch } from "./InputSearch";

export const Search = () => {
  const { isOpen, handleClose, handleSend } = useImage();

  return (
    <Drawer open={isOpen} onClose={handleClose} position="top">
      <Drawer.Items>
        <div className="flex gap-2">
          <InputSearch />
          <Button
            color={"failure"}
            onClick={() => handleSend({ key: "Enter" })}
          >
            Search
          </Button>
        </div>
      </Drawer.Items>
    </Drawer>
  );
};
