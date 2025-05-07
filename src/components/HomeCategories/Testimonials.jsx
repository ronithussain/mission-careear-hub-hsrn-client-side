import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import testimonialBgImg from '../../assets/testimonials/testimonials.jpg';



const Testimonials = () => {
    const [testimonial, setTestimonial] = useState([]);

    useEffect(() => {
        fetch('teatimonials.json')
            .then(res => res.json())
            .then(data => setTestimonial(data))
    }, [])

    console.log(testimonial)
    return (
        <div
            className='bg-cover bg-center bg-no-repeat sm:mb-24 mb-12'
            style={{ backgroundImage: `url(${testimonialBgImg})` }}
        >
            <div className=" max-w-screen-xl mx-auto px-2 md:px-8">
                <div className="flex flex-col justify-center items-center sm:w-[60%] mx-auto">
                    <h4 className=" text-orange-300 font-medium uppercase sm:text-base text-xs"> TESTIMONIAL</h4>
                    <h3 className="lg:text-4xl md:text-3xl text-[24px] mb-2 font-bold text-center lg:w-[60%] mx-auto ">Our Stories As Told By Customers</h3>
                </div>

                {/* swiper testimonials */}
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    speed={2000}
                    effect='slide'
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"
                >
                    {/* testimonials with map */}
                    {
                        testimonial.map(test => <SwiperSlide
                            key={test._id}
                        >
                            <div className='sm:w-8/12 mx-auto sm:my-8 bg-[#F4FAFF] rounded-2xl flex flex-col  sm:gap-8 gap-6 relative sm:p-14 p-8 '>
                                {/* image */}
                                <div className='flex justify-center items-center absolute  md:-left-4 lg:-left-24 left-18'>
                                    <img
                                        className='w-30 h-30 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full border border-orange-300 '
                                        src={test.image} alt="" />
                                </div>
                                {/* text */}
                                <div className='mt-32 md:mt-0 md:ml-24 lg:ml-16'>
                                    <p className='flex items-center gap-x-1 text-gray-700 font-semibold'>
                                        <span className='flex text-orange-400 gap-x-1'>
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                            <FaStar />
                                        </span>
                                        {test.rating}</p>
                                    <p className='sm:text-base text-xs text-gray-700 mt-2 text-justify'>{test.review}</p>
                                    <div className='flex sm:gap-4 gap-x-1 items-center mt-6'>
                                        <h4 className='font-semibold lg:text-xl md:text-base text-[16px]'>{test.name}</h4>
                                        <h2 className='font-medium lg:text-2xl md:text-xl text-[20px]'>{test.designation}</h2>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;