import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function HeroCategories() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1500 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 1500, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="w-full mt-5 px-5 h-[30vh] md:h-[40vh] flex flex-col justify-center gap-5  ">
      <h1 className="md:text-3xl text-2xl underline underline-offset-[8px] md:underline-offset-[10px]  font-sans font-[600] ">
        Featured Categories
      </h1>

      <Carousel swipeable={true} responsive={responsive}>
        <div className="flex flex-col items-center">
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dmrw4vltk/image/upload/v1717332466/e-commerce/air-jordan-mid/nike-phantom-gx/1_hq7jgq.webp)`,
            }}
            className="bg-cover bg-bottom  bg-no-repeat md:w-[200px] md:h-[200px] w-[150px] h-[150px] bg-indigo-400 rounded-full "
          ></div>
          <p className="text-2xl font-sans "> Sneakers </p>
        </div>

        <div className="flex flex-col items-center">
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dmrw4vltk/image/upload/v1717332487/e-commerce/air-jordan-mid/jordan-stadium-90/1_kyhrf9.jpg)`,
            }}
            className="bg-cover bg-bottom bg-no-repeat md:w-[200px] md:h-[200px] w-[150px] h-[150px] bg-indigo-400 rounded-full "
          ></div>
          <p className="text-2xl font-sans "> Sports </p>
        </div>

        <div className="flex flex-col items-center">
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dmrw4vltk/image/upload/v1717332483/e-commerce/air-jordan-mid/jordan-roam/1_m61nu4.webp)`,
            }}
            className="bg-cover bg-bottom bg-no-repeat md:w-[200px] md:h-[200px] w-[150px] h-[150px] bg-indigo-400 rounded-full "
          ></div>
          <p className="text-2xl font-sans "> Casual </p>
        </div>

        <div className="flex flex-col items-center">
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dmrw4vltk/image/upload/v1717332498/e-commerce/air-jordan-mid/nike-air-max-plus/1.webp)`,
            }}
            className="bg-cover bg-bottom bg-no-repeat md:w-[200px] md:h-[200px] w-[150px] h-[150px] bg-indigo-400 rounded-full "
          ></div>
          <p className="text-2xl font-sans "> Men </p>
        </div>

        <div className="flex flex-col items-center">
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dmrw4vltk/image/upload/v1717332364/e-commerce/air-jordan-mid/1_wlqrzv.jpg)`,
            }}
            className="bg-cover bg-bottom bg-no-repeat md:w-[200px] md:h-[200px] w-[150px] h-[150px] bg-indigo-400 rounded-full "
          ></div>
          <p className="text-2xl font-sans "> Women </p>
        </div>

        <div className="flex flex-col items-center">
          <div
            style={{
              backgroundImage: `url(https://res.cloudinary.com/dmrw4vltk/image/upload/v1717332489/e-commerce/air-jordan-mid/nike-air-max-100/1_k9ti2b.webp)`,
            }}
            className="bg-cover bg-bottom bg-no-repeat md:w-[200px] md:h-[200px] w-[150px] h-[150px] bg-indigo-400 rounded-full "
          ></div>
          <p className="text-2xl font-sans "> Kids </p>
        </div>
      </Carousel>
    </div>
  );
}

export default HeroCategories;
