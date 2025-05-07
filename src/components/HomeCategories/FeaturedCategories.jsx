import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FaStar } from "react-icons/fa";


const FeaturedCategories = () => {
    const [featuredCard, setFeaturedCard] = useState([]);
    useEffect(() => {
        fetch('featuredCategories.json')
            .then(res => res.json())
            .then(data => setFeaturedCard(data))
    }, [])
    
    return (
        <div className="max-w-screen-xl mx-auto px-3 md:px-8 my-24">
            <div>
                <h4 className="text-orange-300 font-bold  uppercase sm:text-base text-xs"> Featured</h4>
                <h1 className="md:text-3xl lg:text-4xl text-xl font-medium">Included Services</h1>
            </div>
            {/* featured card with map */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:mt-8 mt-4">
                {featuredCard.map(featured => (
                    <div
                        key={featured._id}
                        className="card bg-base-100 border-orange-200 border group">

                        {/* image */}
                        <figure className="relative">
                            <img
                                src={featured.image}
                                alt="service" 
                                className="w-full h-60 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"/>
                            <span className="absolute top-3 left-3 bg-white text-orange-600 text-xs font-semibold px-2 py-1 rounded">
                                {featured.category}
                            </span>
                            <button className="absolute top-3 right-3 text-gray-600 bg-white p-1 rounded-full">
                                <AiOutlineHeart className="text-2xl"/>
                            </button>
                        </figure>
                        {/* card body */}
                        <div className="card-body space-y-2 sm:p-6 p-2">
                            {/* location */}
                            <div className="flex items-center justify-between">
                                <span className="flex items-center gap-x-1 font-semibold text-gray-700"><CiLocationOn className="text-xl text-orange-400" />
                                    {featured.location}</span>
                                <span className="ml-auto flex items-center text-yellow-500 font-medium">
                                    <FaStar className=" text-orange-400 mr-1" /> 4.5
                                </span>
                            </div>
                            {/* title */}
                            <h2 className="card-title sm:text-xl text-base hover:text-orange-500 transition duration-300">{featured.title}</h2>
                            {/* price and button */}
                            <div className="card-actions justify-between items-center">
                                <div className="flex flex-col">
                                    <p className="text-sm text-gray-500">Starting from</p>
                                    <p className="flex gap-x-2 items-center">
                                        <span className="text-xl font-bold text-gray-800">${featured.price.current}</span>
                                        <span className="text-sm line-through text-gray-400">${featured.price.original.toFixed(2)}</span>
                                    </p>
                                </div>
                                <button className="sm:px-4 px-3 sm:py-2 rounded-lg bg-orange-200 text-orange-600 border-none hover:bg-orange-500 hover:text-white transition duration-300">Book Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategories;