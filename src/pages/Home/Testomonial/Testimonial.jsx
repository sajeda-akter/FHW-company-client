import { useState } from "react";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://assaingment12-category-0004-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="lg:px-32 p-4">
      <h1 className="text-3xl text-center mt-10 font-medium border-y-2 border-[#FFC5C5] w-80 py-2 mx-auto">--Our Client Review--</h1>

      <Swiper
        autoplay={{ duration: 1000 }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="p-6 rounded-sm  bg-[#E6BAA3] text-[#DA0037] flex items-center flex-col my-12">
              <img
                src={review.image}
                className="w-20 h-20 rounded-full"
                alt=""
              />
              <div className="flex gap-2">
                <FaQuoteLeft />

                <h1 className="uppercase font-semibold text-amber-800 text-2xl">
                  {review.name}
                </h1>
                <FaQuoteRight />
              </div>

              <p className="w-10/12 mb-4 mt-4 text-center">
                {review.details.slice(0, 200)}
              </p>
              <Rating style={{ maxWidth: 150 }} value={review.rating} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
