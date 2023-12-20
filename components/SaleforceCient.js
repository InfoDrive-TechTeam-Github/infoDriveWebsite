import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function SaleforceCient() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  const logos = [
    "2.png",
    "3.png",
    "4.png",
    "5.jpg",
    "6.png",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.png",
    "11.jpg",
    "12.png",
    "14.png",

    "16.png",
    "17.png",
    "18.png",
  ];
  return (
    <section className="client pb-20 space-y-10 mt-16">
      <h2 className="text-[22px] font-Poppins font-bold mx-auto text-center text-[#0b2653]">
        Trusted by Industry Leaders
      </h2>
      <Carousel
        autoPlay={true}
        swipeable={true}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={2000}
        keyBoardControl={true}
        customTransition="all 1"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-50-px"
        className="h-full w-full p-2"
        showArrows={false}
      >
        {logos.map((item) => (
          <div className="h-20 w-60 shadow-md shadow-gray-600 p-5 rounded-md ml-16 md:ml-0">
            <img
              src={`./logos/${item}`}
              className="object-contain h-full w-full"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default SaleforceCient;
