import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useImage } from "../context/ImageProvider";
import { Image } from "../components/Image";
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "flowbite-react";

export const Home = () => {
  const { data, MoreImage, moreData } = useImage();
  return (
    <InfiniteScroll
      dataLength={data.length}
      hasMore={moreData}
      next={MoreImage}
      loader={
        <Spinner
          className="mx-auto flex justify-center items-center self-center"
          size={"xl"}
        />
      }
      style={{ overflow: "none" }}
    >
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 6 }}>
        <Masonry gutter="15px">
          {data.map((i) => (
            <Image key={i.id} url={i.urls.small} alt="" classes={"w-full"} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </InfiniteScroll>
  );
};
