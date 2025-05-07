import { useEffect, useState } from "react";
import { BiChevronRightCircle } from "react-icons/bi";
import { MdArrowOutward } from "react-icons/md";


const PricingCategories = () => {

    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('pricingCategories.json')
            .then(res => res.json())
            .then(data => {
                console.log(setCategories(data))
                setCategories(data)
            })
    }, [])

    return (
        <div className="mb-24 max-w-screen-xl mx-auto px-3 md:px-8">
            <div className="flex flex-col justify-center items-center sm:w-[60%] mx-auto">
                <h4 className=" text-orange-300 font-medium uppercase sm:text-base text-xs"> pricing</h4>
                <h3 className="lg:text-3xl md:text-2xl text-base mb-2 font-bold  text-center">Flexible Pricing</h3>

                {/* toggle button */}
                <div className="flex items-center gap-4 my-4">
                    <h3 className="text-xl font-semibold text-gray-800">Monthly</h3>
                    {/* toggle input */}
                    <input type="checkbox" className="toggle toggle-success" />
                    <h3 className="text-xl font-semibold text-gray-800">Yearly</h3>
                </div>
            </div>
            {/* Pricing categories card */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mt-6">
                {categories.map(category => (
                    <div key={category._id}
                        className="border border-orange-200  overflow-hidden rounded-3xl flex flex-col"
                    >
                        {/* part-1 */}
                        <div className="bg-[#F4FAFF] hover:bg-[#3B576E] hover:text-white p-6 transition-all duration-300 group">
                            <span className="text-orange-600 bg-white font-semibold px-3 py-1 rounded-md text-sm">
                                {category.title}
                            </span>
                            <p className="text-gray-600 text-sm mt-4 group-hover:text-white">{category.description}</p>
                            <h2 className="text-4xl font-bold text-gray-800 group-hover:text-white mt-4 mb-2">${category.price} <small className="sm:text-base text-xs font-light">/ {category.duration}</small></h2>
                        </div>
                        {/* part-2 */}
                        <div className="bg-white hover:bg-[#FEF3F3] p-6 transition-all duration-300">
                            <ul className="space-y-3 mb-6 text-sm text-gray-700">
                                {category.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <BiChevronRightCircle />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            {/* button */}
                            <button className=" bg-orange-600 hover:bg-orange-700 text-white sm:px-12 px-8 sm:py-3 py-1 rounded-lg font-medium transition flex items-center">Get Started  <MdArrowOutward className="sm:text-lg text-base ml-2" /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingCategories;