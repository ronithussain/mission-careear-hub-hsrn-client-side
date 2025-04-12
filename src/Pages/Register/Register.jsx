import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";


const Register = () => {
    const { createUser, updateUserProfile } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log('user profile is updated')
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate("/");
                    })
                    .catch(error => console.log(error))
            })
    }

    return (
        <>
            <div className="flex flex-col md:flex-row flex-wrap sm:flex-nowrap min-h-screen">
                {/* Left Side Section */}
                <div className="min-h-[70vh] bg-emerald-500 flex justify-center items-center lg:w-[50%]">
                    <h2 className="text-white text-3xl font-bold">Welcome Back!</h2>
                </div>

                {/* Login Section */}
                <div className="hero bg-base-200 flex justify-center items-center lg:w-[50%] min-h-[70vh]">
                    <div className="hero-content w-full max-w-lg">
                        <div className="card bg-base-100 w-full shadow-2xl sm:p-8 p-5">
                            <div className="">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">Sign Up!</h1>

                                {/* Form */}
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 mt-6">
                                    {/* Name */}
                                    <div>
                                        <label className="block text-gray-500 text-lg font-medium mb-2">Name</label>
                                        <input
                                            {...register("name", { required: true })}
                                            placeholder="Enter your Name"
                                            className="w-full py-3 px-5 text-lg bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-pink-400 text-black placeholder-gray-500 outline-none transition-all duration-300"
                                        />
                                        {errors.name && <span className="text-red-400 text-sm">This name is required</span>}
                                    </div>

                                    {/* Photo URL */}
                                    <div>
                                        <label className="block text-gray-500 text-lg font-medium mb-2">Photo URL</label>
                                        <input
                                            {...register("photo", { required: true })}
                                            placeholder="Enter your photo URL"
                                          className="w-full py-3 px-5 text-lg bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-pink-400 text-black placeholder-gray-500 outline-none transition-all duration-300"
                                        />
                                        {errors.photo && <span className="text-red-400 text-sm">Photo URL is required</span>}
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label className="block text-gray-500 text-lg font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            {...register("email", { required: true })}
                                            placeholder="Enter your email"
                                            className="w-full py-3 px-5 text-lg bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-pink-400 text-black placeholder-gray-500 outline-none transition-all duration-300"
                                        />
                                        {errors.email && <span className="text-red-400 text-sm">Email is required</span>}
                                    </div>

                                    {/* Password */}
                                    <div>
                                        <label className="block text-gray-500 text-lg font-medium mb-2">Password</label>
                                        <div className="relative">
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                autoComplete="off"
                                                {...register("password", {
                                                    required: true,
                                                    minLength: 6,
                                                    maxLength: 20,
                                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                                })}
                                                placeholder="Enter your password"
                                                className="w-full py-3 px-5 text-lg bg-gray-100 border-none rounded-lg focus:ring-2 focus:ring-pink-400 text-black placeholder-gray-500 outline-none transition-all duration-300"
                                            />
                                            <button
                                                onClick={() => setShowPassword(!showPassword)}
                                                type="button"
                                                className="text-gray-500 absolute top-5 right-4"
                                            >
                                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                                            </button>
                                        </div>
                                        {errors.password?.type === 'required' && <p className="text-red-400 text-sm">Password is required</p>}
                                        {errors.password?.type === 'minLength' && <p className="text-red-500 text-xs">Password must be at least 6 characters</p>}
                                        {errors.password?.type === 'maxLength' && <p className="text-red-500 text-xs">Password must be less than 20 characters</p>}
                                        {errors.password?.type === 'pattern' && <p className="text-red-500 text-xs">Password must include uppercase, lowercase, number, and special character</p>}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform">
                                        Sign Up
                                    </button>
                                </form>

                                {/* Register Link */}
                                <p className="text-center text-gray-600 mt-4">
                                    Already have an account?
                                    <Link className="text-blue-600" to='/login'> Please Login</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Register;