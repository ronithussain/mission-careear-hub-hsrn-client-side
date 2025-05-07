import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import SocialLogin from "../Shared/socialLogin/SocialLogin";



const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password, 'login now');

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "Your Login is successfully",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster `
                    }
                });
                navigate(from, {replace: true});
            })
            .catch(err => console.log(err.message));
    }
    return (
        <>
            <div className="flex flex-col md:flex-row flex-wrap sm:flex-nowrap min-h-screen">
                {/* Login Section */}
                <div className="hero bg-base-200 flex justify-center items-center lg:w-[50%] min-h-[70vh]">
                    <div className="hero-content w-full max-w-lg">
                        <div className="card bg-base-100 w-full shadow-2xl sm:p-8 p-5">
                            <div className="">
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">Login Now!</h1>

                                {/* Form */}
                                <form onSubmit={handleLogin} className="space-y-4 mt-8">
                                    <div>
                                        <label className="block text-gray-500 text-lg font-medium mb-2">Email</label>
                                        <input type="email" name="email" placeholder="Enter your email"
                                            className="w-full py-3 px-5 text-lg bg-white bg-opacity-30 border-none rounded-lg focus:ring-2 focus:ring-pink-400 text-gray-500 placeholder-gray-200 outline-none transition-all duration-300" />
                                    </div>

                                    <div className="relative">
                                        <label className="block text-gray-500 text-lg font-medium mb-2">Password</label>
                                        <input
                                            type={showPassword ? 'text' : "password"}
                                            name="password"
                                            placeholder="Enter your password"
                                            className="w-full py-3 px-5 text-lg bg-white bg-opacity-30 border-none rounded-lg focus:ring-2 focus:ring-pink-400 text-gray-500 placeholder-gray-200 outline-none transition-all duration-300"
                                        />
                                        <button onClick={() => setShowPassword(!showPassword)}
                                            type="button"
                                            className="text-gray-500 absolute top-14 right-4"
                                            >
                                                {showPassword ? <FaEye/> : <FaEyeSlash/>}
                                                
                                        </button>
                                    </div>

                                    <div className="text-right">
                                        <a className="text-pink-300 hover:underline">Forgot password?</a>
                                    </div>

                                    <div className="divider"></div>

                                    <SocialLogin></SocialLogin>

                                    <button type="submit"
                                        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform">
                                        Login
                                    </button>
                                </form>
                                {/* Register Link */}
                                <p className="text-center text-gray-600 mt-4"> New Here?
                                    <Link
                                        className="text-blue-600"
                                        to='/signUp'> Create An Account
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side Section */}
                <div className="min-h-[70vh] bg-emerald-500 flex justify-center items-center lg:w-[50%]">
                    <h2 className="text-white text-3xl font-bold">Welcome Back!</h2>
                </div>
            </div>
        </>
    );
};

export default Login;