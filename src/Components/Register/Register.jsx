import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)
    }
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center">
                <div>
                    <img className="w-[2000px]" src="https://i.postimg.cc/2jdV2Vmg/bg3.jpg" alt="" />
                </div>
                <div className="hero min-h-screen ">
                    <div className="hero-content ">
                        <div className="card shrink-0 w-full bg-base-100">
                            <form onSubmit={handleSubmit} className="card-body">
                                <div>
                                    <h3 className="text-2xl text-[#3b3b3b] roboto font-bold mb-6">Register account</h3>
                                    <p className="roboto text-[#9c9c9c9c] mb-5">Provide credentials & information to register</p>
                                </div>
                                <div className="form-control">
                                    <input type="email" name="email" placeholder="Email" className="input bg-slate-100 mb-2"
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
                                    <button className="btn text-white bg-[#3e362e] hover:bg-[#3e362e66] border-none text-lg">Register</button>
                                </div>

                                <div className="flex justify-between items-center">
                                    <p>Already Registered?</p>
                                    <Link to="/login"><button className=" text-black hover:bg-[#3e362e33] px-4 py-2 rounded-full border-nones font-bold">Sign in Now</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;