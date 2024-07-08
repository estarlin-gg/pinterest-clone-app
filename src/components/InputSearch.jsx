import { useImage } from "../context/ImageProvider";

export const InputSearch = () => {
  const { handleSend, handleChange } = useImage();

  return (
    <input
      type="text"
      placeholder="Search"
      onChange={handleChange}
      onKeyDown={handleSend}
      className="w-full border-none bg-slate-100 rounded-full outline-none focus:border-none focus:outline-none"
    />
  );
};
