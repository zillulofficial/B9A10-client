import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const MyCraft = () => {
    const { user } = useContext(AuthContext)
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myCraft/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProducts(data)
            })
    }, [user])
    return (
        <div>
            <div className="text-center mb-16 mt-16">
                <h2 className="Rancho text-5xl mb-4">Your Added Products</h2>
                <p>Explore MapleWhisper's Add Craft section, featuring unique, handcrafted wooden decor. Discover exquisite,
                    customizable pieces crafted by skilled artisans, blending <br className="hidden lg:block" />natural beauty with timeless design for your home.</p>
            </div>
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                {
                    products.map(product => <div key={product._id}>
                        <div className="hero bg-base-200 rounded-lg p-4 transition-all hover:cursor-pointer hover:scale-95 duration-500 ease">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={product.photoURL} className="w-80 max-h-72 rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-3xl Rancho font-bold mb-4">{product.subName}</h1>
                                    <p className="text-slate-500 mb-3">{product.details}</p>
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="roboto">{product.price} tk</p>
                                        <p className="roboto">{product.rating}</p>
                                    </div>
                                    <div className="mb-6">
                                        <p className="roboto mb-2">Availability: {product.stock}</p>
                                        <p className="roboto">Preparation time: {product.time}</p>
                                    </div>
                                    <button className="btn border-none bg-[#4f7942b4] text-white hover:text-slate-400 hover:bg-[#4f79424d]">View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyCraft;