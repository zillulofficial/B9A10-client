import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaStar } from "react-icons/fa6";

const ShopWithUS = () => {

    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myCraft/thala@bashon.com`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [user])
    return (
        <div className="mb-32">
            <div className=" text-center mb-20">
                <h3 className="Rancho text-3xl md:text-5xl mb-4">Shop With Us</h3>
                <p>
                    Welcome to MapleWhisper.com, where handcrafted wooden and jute decor meets exceptional craftsmanship and sustainability. Our curated collection offers unique,
                    eco-friendly pieces <br className="hidden lg:block" />that add warmth, charm, and style to your home. Shop with us for beautiful, durable decor that makes your living space truly unique.
                </p>
            </div>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                {
                    products.map(product => <div key={product._id}>
                        <div className="hero bg-base-200 rounded-lg p-4 transition-all hover:cursor-pointer hover:scale-95 duration-500 ease">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={product.photoURL} className="w-80 max-h-72 rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-3xl Rancho font-bold mb-4">{product.name}</h1>
                                    <p className="text-slate-500 mb-3">{product.details}</p>
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="roboto flex items-center gap-1">{product.price} <TbCurrencyTaka className="text-lg text-green-700"></TbCurrencyTaka></p>
                                        <p className="roboto flex items-center gap-1 justify-center"><FaStar className="text-orange-600"></FaStar>{product.rating}</p>
                                    </div>
                                    <p className="roboto mb-2">Availability: {product.stock}</p>
                                    <div className="mb-6 flex justify-between items-center">
                                        <p className="roboto">Preparation time: {product.time}</p>
                                        <p className="roboto">Customizable: {product.customization}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <Link to={`/viewDetails/${product._id}`}><button className="btn border-none bg-[#4f7942b4] text-white hover:text-slate-400 hover:bg-[#4f79424d]">View Details</button></Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <div className="text-center">
            <Link to="/allCraft"><button className="border-none font-bold text-white hover:bg-[#1abc9c42] hover:text-white bg-slate-300 px-5 py-3">Show More</button></Link>
            </div>
        </div>
    );
};

export default ShopWithUS;