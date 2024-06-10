import { useContext, useState } from "react";
import { FaEye, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
    const { login, googleLogIn, facebookLogIn } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/';

    const [showPassword, setShowPassword] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
        login(email, password)
        .then((result) => {
            if(result.user){
                navigate(from)
                Swal.fire({
                    title: 'Success!',
                    text: 'Logged in successfully',
                    icon: 'success',
                    confirmButtonText: 'Okay'
                })
            }
            console.log(result)
        })
        .catch(() => {
            Swal.fire({
                title: 'error!',
                text: 'There is an error',
                icon: 'error',
                confirmButtonText: 'Okay'
            })
        })
    }

    const handleSocialSignIn = (socialProvider) => {
        socialProvider()
            .then(result => {
                if (result.user) {
                    navigate(from)
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center">
                <div>
                    <img className="w-[2000px]" src="https://i.postimg.cc/fTBkQpVK/bg2.jpg" alt="" />
                </div>
                <div className="hero min-h-screen ">
                    <div className="hero-content ">
                        <div className="card shrink-0 w-full bg-base-100">
                            <form onSubmit={handleSubmit} className="card-body">
                                <div>
                                    <h3 className="text-2xl text-[#3b3b3b] roboto font-bold mb-6">Login into account</h3>
                                    <p className="roboto text-[#9c9c9c9c] mb-5">Use your credentials to access your account.</p>
                                </div>
                                <div className="form-control">
                                    <input type="email" name="email" placeholder="Email address" className="input bg-slate-100 mb-2"
                                    />
                                </div>
                                <div className="form-control">
                                    <div className="relative ">
                                        <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input w-full bg-slate-100"
                                        />
                                        <span className="absolute top-3 right-4" onClick={() => setShowPassword(!showPassword)}>
                                            {
                                                showPassword ? <IoMdEyeOff className="text-[#9c9c9c] text-xl"></IoMdEyeOff> : <FaEye className="text-[#9c9c9c] text-xl"></FaEye>
                                            }
                                        </span>
                                    </div>
                                </div>
                                <div className="form-control mt-6 mb-4">
                                    <button className="btn text-white bg-[#ff3838cb] hover:bg-[#ff383857] border-none text-lg">Login</button>
                                </div>
                            </form>

                            <div className="px-8 mb-5">
                                <p className=" text-center divider">Or Login with</p>
                                <div className="flex items-center justify-between">
                                    <button onClick={() => handleSocialSignIn(googleLogIn)} className="hover:bg-slate-200 rounded-full px-4 py-2  flex gap-1 items-center"><FcGoogle className="text-2xl"></FcGoogle>Google</button>
                                    <button onClick={() => handleSocialSignIn(facebookLogIn)} className="hover:bg-slate-200 rounded-full px-4 py-2 flex gap-1 items-center"><FaFacebook className="text-2xl text-blue-600"></FaFacebook>Facebook</button>
                                </div>
                            </div>

                            <div className="flex justify-between items-center">
                                <p>Don't have an account?</p>
                                <Link to="/register"><button className=" text-black hover:underline hover:underline-offset-4 hover:text-[#ff3838cb] px-4 py-2 rounded-full border-none font-bold">Register here</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;