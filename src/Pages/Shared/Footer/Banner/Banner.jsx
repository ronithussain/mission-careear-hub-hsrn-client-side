import { FaSearch } from 'react-icons/fa';
import bannerImage from '../../../../assets/home/banner.jpg';
import bannerImage3 from '../../../../assets/home/banner3.jpg';
import { MdLocationPin } from 'react-icons/md';

const Banner = () => {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(249, 238, 236, 0.9), rgba(249, 238, 236, 0.9)), url(${bannerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
            className="min-h-screen flex items-center justify-center text-black px-4 sm:px-8 lg:px-12"
        >
            <div className="max-w-screen-xl mx-auto md:my-12 my-4">

                {/* Banner Section */}
                <div className="flex flex-col lg:flex-row items-center gap-8">

                    {/* Text Section */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                        <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                            Choose Experts to Complete Your <br />
                            <span className="text-[#F15A29]">Job </span>Done
                        </h2>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-700">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptate nobis aliquid provident ea eos minus. 
                            Nemo et, expedita mollitia ea, rerum fugit iusto voluptatibus hic.
                        </p>

                        {/* Search Section */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                            {/* location */}
                            <button className="btn btn-secondary flex items-center px-4 py-2">
                                <MdLocationPin className="mr-1" /> Location
                            </button>
                            {/* search input */}
                            <div className="relative w-full sm:w-auto">
                                <input
                                    type="text"
                                    placeholder="Search by title..."
                                    className="w-full sm:w-[250px] lg:w-[300px] bg-white/50 backdrop-blur-xl input py-2 px-4 pl-10 rounded-lg border-gray-300 focus:ring-2 focus:ring-gray-500 focus:border-gray-500 shadow-md transition duration-300 text-black placeholder-gray-500 border-none"
                                />
                                <button
                                    className="absolute top-2 right-0 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
                                >
                                    <FaSearch />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img 
                            className="w-[90%] sm:w-[75%] md:w-[60%] lg:w-[80%] max-w-xs sm:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
                            src={bannerImage3} 
                            alt="Banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
