import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Swiper,SwiperSlide } from "swiper/react";
import {Autoplay} from 'swiper/modules'
import 'swiper/css';
import img1 from '../../../../public/images/content.jpg'
import img2 from '../../../../public/images/market.jpg'
import img3 from '../../../../public/images/paper.jpg'
import img4 from '../../../../public/images/sales.jpg'
import img5 from '../../../../public/images/support.png'
const Banner = () => {
   
    return (
       <div className="lg:w-11/12 p-4 mt-2 bg-[#FFC5C5]  mx-auto px-4  ">
       <Swiper
       slidesPerView={3}
       spaceBetween={30}
       centeredSlides={true}
       autoplay={{duration:1000}}
       modules={[Autoplay]}
   
    >
      <SwiperSlide>
        <img src={img1} alt="" className=" rounded-md w-full" />
        <p className="lg:text-2xl uppercase -mt-12 text-center text-red-700">Content</p>
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" className=" rounded-md w-full"/>
        <p className="lg:text-2xl uppercase -mt-12 text-center text-red-700">Marketing</p>


      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" className=" rounded-md w-full" />
        <p className="lg:text-2xl uppercase -mt-12 text-center text-red-700">Paper Work</p>


      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" className=" rounded-md w-full"/>
        <p className="lg:text-2xl uppercase -mt-12 text-center text-red-700">Sales</p>

      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="" className=" rounded-md w-full"/>
        <p className="lg:text-2xl uppercase -mt-12 text-center text-red-700">Support</p>

      </SwiperSlide>
      <SwiperSlide>
        <img src={img1} alt="" className=" rounded-md w-full"/>
        <p className="lg:text-2xl uppercase -mt-12 text-center text-red-700">Support</p>

      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" className=" rounded-md w-full"/>
        <p className="lg:text-2xl uppercase -mt-12 text-center text-red-700">Support</p>

      </SwiperSlide>
    
    
    </Swiper>
       </div>
    );
};

export default Banner;