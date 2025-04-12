import React from 'react';
import { FaFacebook, FaHome, FaInstagram, FaTwitter } from 'react-icons/fa';
import { LuPhoneCall } from 'react-icons/lu';
import { RxCross1 } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.log(error)
            })
    }

    const navOptions = <>
        <li><NavLink className="hover:text-[#FF6900] font-medium" to="/">HOME</NavLink></li>
        <li><NavLink className="hover:text-[#FF6900] font-medium" to="/aboutUs">ABOUT US</NavLink></li>
        <li><NavLink className="hover:text-[#FF6900] font-medium" to="/service">SERVICE</NavLink></li>
        <li><NavLink className="hover:text-[#FF6900] font-medium" to="/worker">WORKER</NavLink></li>
        <li><NavLink className="hover:text-[#FF6900] font-medium" to="/blog">BLOG</NavLink></li>
        <li><NavLink className="hover:text-[#FF6900] font-medium" to="/contact">CONTACTS</NavLink></li>
    </>;

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="max-w-screen-xl mx-auto navbar flex items-center justify-between px-4 md:px-8">

                {/* Logo Section */}
                <div className="flex items-center">
                    <p className="text-xl font-medium">Career<span className='text-[#FF6900]'>H</span>ub</p>
                </div>

                {/* Drawer for Mobile */}
                <div className="lg:hidden">
                    <label htmlFor="my-drawer-4" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </label>
                </div>

                {/* Navigation Links (Desktop View) */}
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-4">
                        {navOptions}
                    </ul>
                </div>

                {/* Contact & Buttons */}
                <div className='hidden md:block'>
                    <div className="flex items-center gap-2 md:gap-4 ">
                        <div className='hidden lg:flex items-center text-xl'>
                            <button className='flex items-center gap-x-1'>
                                <LuPhoneCall />
                                <p>+000153779</p>
                            </button>
                        </div>
                        {/* conditional */}
                        {
                            user ?
                                <>

                                    <button onClick={handleLogout} className="btn px-4 py-2 text-white font-semibold rounded-md bg-[#F15A29] hover:bg-[#445F65] transition-all duration-500">
                                        Sign Out
                                    </button>

                                </> :
                                <>
                                    <Link to="login" className="btn px-4 py-2 text-black font-semibold rounded-md bg-[#FFF9F9] hover:bg-[#445F65] hover:text-white transition-all duration-500">
                                        Sign In
                                    </Link>
                                </>
                        }
                        <Link to="signUp" className="btn px-4 py-2 text-white font-semibold rounded-md bg-[#F15A29] hover:bg-[#445F65] transition-all duration-500">
                            Sign Up
                        </Link>
                    </div>
                </div>

                {/* Drawer Sidebar */}
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle hidden" />
                <div className="drawer-side z-50">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full md:w-[50%] p-4">
                        <div className='flex justify-end pt-2 pr-2'>
                            {/* Close Button */}
                            <button onClick={() => document.getElementById("my-drawer-4").checked = false}
                                className="md:text-2xl text-xl  text-gray-600 hover:text-black transition duration-300">
                                <RxCross1 />
                            </button>
                        </div>
                        {/* Drawer Header */}
                        <div className=" mb-6 px-2 mt-4">
                            <p className="text-xl font-medium flex items-center gap-x-2">
                                <FaHome className='text-orange-500 text-3xl' /> Career<span className='text-[#FF6900]'>H</span>ub
                            </p>
                        </div>

                        {/* Navigation Links */}
                        {navOptions}

                        {/* Social Icons */}
                        <div className='flex justify-center mt-10'>
                            <div className="flex items-center space-x-6 text-[26px]">
                                <a href="https://x.com/ZainHussai99859" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="text-blue-500 hover:text-white" />
                                </a>
                                <a href="https://www.facebook.com/zain.hussain.317274" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className='text-blue-500 hover:text-white' />
                                </a>
                                <a href="https://www.instagram.com/invites/contact/" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="text-orange-400 hover:text-white" />
                                </a>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
