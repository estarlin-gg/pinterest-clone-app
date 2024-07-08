import { useRef, useState, useEffect, createContext, useContext } from "react";
import { createApi } from "unsplash-js";

const api = createApi({
  accessKey: "rpcxET4p_B-U9wDM_NWtgZDmlYuNnUHUKikeW6kfzgk",
});

const ImageContext = createContext();

export const useImage = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [moreData, setMoreData] = useState(true);
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const index = useRef(1);
  const inputRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await api.search.getPhotos({
          query: search || "all",
          page: index.current,
          perPage: 30,
        });

        if (index.current === 1) {
          setData(result.response.results);
        } else {
          setData((prev) => prev.concat(result.response.results));
        }

        setMoreData(result.response.results.length > 0);
      } catch (error) {
        console.log("something went wrong!", error);
      }
    };

    fetchData();
  }, [search]);

  const MoreImage = () => {
    if (!moreData) return;

    index.current += 1;

    const fetchData = async () => {
      try {
        const result = await api.search.getPhotos({
          query: search || "all",
          page: index.current,
          perPage: 30,
        });

        setData((prev) => prev.concat(result.response.results));
        setMoreData(result.response.results.length > 0);
      } catch (error) {
        console.log("something went wrong!", error);
      }
    };

    fetchData();
  };
  const handleClose = () => setIsOpen(false);

  const HandleSearch = () => {
    index.current = 1;
    setMoreData(true);
    setData([]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setSearch(inputRef.current.value);
      HandleSearch();
      setIsOpen(false);
    }
  };

  return (
    <ImageContext.Provider
      value={{
        data,
        MoreImage,
        moreData,
        HandleSearch,
        search,
        setSearch,
        handleKeyDown,
        inputRef,
        isOpen,
        handleClose,
        setIsOpen,
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};
