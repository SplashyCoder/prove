import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";



const Slider = () =>{ 
return (
    <>
    <Swiper
        // slidesPerView={1}
        // spaceBetween={100}
        // slidesPerGroup={1}
        breakpoints={{
            300:{
                // width: 300,
              slidesPerView: 1,
              slidesPerGroup: 1,
              spaceBetween:30,
              
            },
            576: {
            //   width: 576,
                slidesPerView: 2,
              slidesPerGroup: 2,
                spaceBetween:0
            },
            768: {
            //   width: 768,
              slidesPerView: 3,
              slidesPerGroup: 3
            }
          }}
        loop={true}
        loopFillGroupWithBlank={true}
        // pagination={{
        // clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation, ]}
        className="mySwiper"

   
        >
        <SwiperSlide>
            <button className="cardButton">
                {/* <a href="" target="_blank" className="cardLink"> */}
                    <div className='cardImage'><img src='https://cdn-icons-png.flaticon.com/512/5968/5968350.png'alt=""/></div>
                    {/* <div id='cardDescription'>Python basico</div> */}
                {/* </a> */}
            </button>
        </SwiperSlide>
        <SwiperSlide>
            <button className="cardButton ">
                {/* <a href="#" target="_blank" className="cardLink"> */}
                    <div className='cardImage'><img src="https://cdn-icons-png.flaticon.com/128/5968/5968267.png" alt=""/></div>
                    {/* <div id='cardDescription'>Html</div> */}
                {/* </a> */}
            </button>
        </SwiperSlide>
        <SwiperSlide>
            <button className="cardButton">
                {/* <a href="#" target="_blank" className="cardLink"> */}
                    <div className='cardImage'><img src="https://cdn-icons-png.flaticon.com/128/5968/5968242.png" alt=""/></div>
                    {/* <div id='cardDescription'>Html</div> */}
                {/* </a> */}
            </button>
        </SwiperSlide>
        <SwiperSlide>
            <button className="cardButton">
                {/* <a href="#" target="_blank" className="cardLink"> */}
                    <div className='cardImage'><img src="https://cdn-icons-png.flaticon.com/128/5968/5968292.png" alt=""/></div>
                    {/* <div id='cardDescription'>Html</div> */}
                {/* </a> */}
            </button>
        </SwiperSlide>
        <SwiperSlide>
            <button className="cardButton">
                {/* <a href="#" target="_blank" className="cardLink"> */}
                    <div className='cardImage'><img src="{require('./media/react.png')}" alt=""/></div>
                {/* </a> */}
            </button>            
        </SwiperSlide>
        <SwiperSlide>
            <button className="cardButton">
                {/* <a href="#" target="_blank" className="cardLink"> */}
                    <div className='cardImage'><img src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png" alt=""/></div>
                    {/* <div id='cardDescription'>Html</div> */}
                {/* </a> */}
            </button>            
        </SwiperSlide>
        <SwiperSlide>
            <button className="cardButton">
                {/* <a href="#" target="_blank" className="cardLink"> */}
                    <div className='cardImage'><img src="https://cdn-icons-png.flaticon.com/128/5003/5003884.png" alt=""/></div>
                    {/* <div id='cardDescription'>Html</div> */}
                {/* </a> */}
            </button>  
        </SwiperSlide>
        <SwiperSlide>
            <button className="cardButton">
                {/* <a href="#" target="_blank" className="cardLink"> */}
                    <div className='cardImage'><img src="https://cdn-icons-png.flaticon.com/128/1664/1664316.png" alt=""/></div>
                    {/* <div id='cardDescription'>Html</div> */}
                {/* </a> */}
            </button>  
        </SwiperSlide>
        <SwiperSlide>
            <button className="cardButton">
                {/* <a href="#" target="_blank" className="cardLink"> */}
                    <div className='cardImage'><img src="https://cdn-icons-png.flaticon.com/512/5969/5969059.png" alt=""/></div>
                    {/* <div id='cardDescription'>Html</div> */}
                {/* </a> */}
            </button>  
        </SwiperSlide>
    </Swiper>
    </>
)}
export default Slider 