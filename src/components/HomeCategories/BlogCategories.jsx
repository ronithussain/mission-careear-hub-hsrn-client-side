import React, { useEffect, useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';


const BlogCategories = () => {
    const [blogCategories, setBlogCategories] = useState([]);

    useEffect(() => {
        fetch('blogCategories.json')
            .then(res => res.json())
            .then(data => setBlogCategories(data))
    }, [])
  
    return (
        <div className=' bg-[#FFF9F9] my-24'>
            <div className="max-w-screen-xl mx-auto px-3 md:px-8 py-24">
                {/* Blogs text title */}
                <div>
                    <h4 className="text-orange-400 font-medium uppercase sm:text-base text-xs"> Blogs</h4>
                    <div className='flex justify-between'>
                        <h1 className="md:text-3xl lg:text-4xl text-xl font-medium">Popular Update</h1>
                        <button className='flex items-center gap-x-1 text-orange-600 underline mt-6 group transition duration-300 ease-in-out hover:text-orange-700'>
                            Explore More
                            <MdArrowOutward className='text-xl transform transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1' />
                        </button>

                    </div>
                </div>

                {/* Blogs card with map */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:mt-8 mt-4">
                    {blogCategories.map(blog => (
                        <div
                            key={blog._id}
                            className="card  group">
                            {/* title */}
                            <h2 className="card-title sm:text-2xl text-base mb-6 relative">
                                {blog.title}
                                {/* Left to right underline */}
                                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-orange-500 transform scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500"></span>
                            </h2>

                            {/* date */}
                            <div className="flex items-center justify-between mb-6">
                                <span className="flex items-center gap-x-1 text-gray-700">
                                    {blog.category}</span>
                                <span className="ml-auto flex items-center text-black bg-[#FDEEEE] px-2 py-0.5 rounded sm:text-base text-xs">
                                    {blog.date}
                                </span>
                            </div>
                            {/* image */}
                            <figure className="border-orange-200 border rounded-xl bg-base-100 overflow-hidden">
                                <img
                                    src={blog.image}
                                    alt="service"
                                    className="w-full px-6 py-4  object-cover transition-transform duration-500 ease-in-out group-hover:scale-115  rounded-4xl " />
                            </figure>
                            <p className='mt-6 text-gray-600 sm:text-base text-xs'>{blog.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default BlogCategories;