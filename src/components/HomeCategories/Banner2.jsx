import banner2 from '../../assets/homeImages/banner2.jpg'
import { LuCircleChevronRight } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import bannerImg from '../../assets/homeImages/bannerImage.jpg'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import lottieSticker from '../../assets/lottie/lottieSticker.json.json'
import Lottie from 'lottie-react';
import smallCard from '../../assets/homeImages/smallCard.png'
import { LuArrowUp } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";


const Banner2 = () => {
    return (
        <div className="text-white bg-cover bg-center bg-no-repeat w-full "
            style={{ backgroundImage: `url(${banner2})` }}
        >
            {/* card section */}
            <div className="max-w-screen-xl mx-auto px-3 md:px-8 my-24">
                <div className='flex flex-col lg:flex-row py-20 gap-12 md:space-y-8'>
                    {/* text-section */}
                    <div className='lg:w-[50%] lg:py-8'>
                        <h4 className="text-orange-300 font-medium uppercase sm:text-base text-xs flex items-center">
                            <MdKeyboardDoubleArrowRight className="text-xl text-orange-300" />
                            prices for services</h4>
                        <h3 className="lg:text-4xl md:text-2xl text-xl mb-2 font-bold ">Understand Your Expenses, Reap the Rewards</h3>
                        <p className='sm:text-xl text-[20px]'>Our Professional Website Setup service offers a comprehensive, fixed-price package designed.</p>


                        <div className='my-6 space-y-1'>
                            <p className='flex items-center gap-x-2 sm:text-base text-xs'><LuCircleChevronRight className='text-orange-300' /> Free access to thousands of job opportunities</p>
                            <p className='flex items-center gap-x-2 sm:text-base text-xs'><LuCircleChevronRight className='text-orange-300' /> Grow your business and client base</p>
                            <p className='flex items-center gap-x-2 sm:text-base text-xs'><LuCircleChevronRight className='text-orange-300' /> Earn extra income on a flexible schedule</p>
                            <p className='flex items-center gap-x-2 sm:text-base text-xs'><LuCircleChevronRight className='text-orange-300' />No subscription or credit fees</p>
                        </div>
                        <div>
                            <button className="btn bg-orange-600 text-white border-none sm:text-base text-xs">
                                More Details <MdArrowOutward className="sm:text-lg text-base" />
                            </button>
                        </div>
                    </div>
                    {/* image-section */}
                    <div className='relative'>
                        {/* lottie sticker */}
                        <div className='sm:w-[310px] w-[200px] absolute md:-top-18 md:-left-18 lg:-top-20 lg:-left-12 -top-12 -left-12'>
                            <Lottie animationData={lottieSticker} loop={true}></Lottie>
                        </div>
                        <img src={bannerImg} className='lg:h-[650px] lg:w-[95%] lg:ml-[5%] rounded-3xl' alt="" />
                        <div className='sm:w-[30%] w-[65%] absolute lg:-bottom-1  lg:-left-20 md:-bottom-6  md:-left-4 -bottom-18 -left-3'>
                            <h5 className='bg-[#062D4E] rounded-t-2xl p-2 sm:text-base text-xs'>Total earnings</h5>
                            <div className='bg-[#E0EDF8] rounded-b-2xl p-4'>
                                <img 
                                className='w-36 sm:h-28 sm:block hidden' 
                                src={smallCard} alt="" />
                                <h3 className='text-black font-medium sm:text-xl'>$12,500</h3>
                                <p className='text-gray-600 sm:text-base text-xs flex items-center'><LuArrowUp className='text-xl text-orange-400'/> 20% us last month</p>
                            </div>
                        </div>
                        <div className='bg-white absolute sm:top-10 sm:-right-10 top-8 -right-2 sm:px-4 sm:py-2 p-1 rounded-xl shadow-2xl'>
                            <h5 className='flex items-center text-gray-800 text-xs sm:text-base'><IoIosNotificationsOutline className='sm:text-2xl text-xl text-orange-400'/> Update job alert</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;