import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link, useParams } from "react-router-dom";

const CategorySection = () => {
    const [categoryInfo, setCategoryInfo] = useState([])
    const categoryName = useParams()
    const category = categoryName.category
    console.log(category)

    useEffect(() => {
        fetch(`https://b9-a10-server-ashy.vercel.app/categories/${category}`)
            .then(res => res.json())
            .then(data => {
                setCategoryInfo(data);
            })
    }, [])
    return (
        <div className="container mx-auto mt-16">
            <div className=" text-center mb-20">
                <h3 className="Rancho text-5xl mb-4 text-gray-500">{category}</h3>
                <p>
                    Browse our Selected Category at MapleWhisper.com, where we've curated the finest
                    wooden and jute decor items <br className="hidden lg:block" />to enhance your home's natural beauty and charm.
                </p>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                {
                    categoryInfo.map(cat => <div key={cat._id}>
                        <div className="hero bg-base-200 rounded-lg p-4 transition-all hover:cursor-pointer hover:scale-95 duration-500 ease">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src={cat.photoURL} className="w-80 max-h-72 rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-3xl Rancho font-bold mb-4">{cat.name}</h1>
                                    <p className="text-slate-500 mb-3">{cat.details}</p>
                                    <div className="flex justify-between items-center mb-2">
                                        <p className="roboto flex items-center gap-1">{cat.price} <TbCurrencyTaka className="text-lg text-green-700"></TbCurrencyTaka></p>
                                        <p className="roboto flex items-center gap-1 justify-center"><FaStar className="text-orange-600"></FaStar>{cat.rating}</p>
                                    </div>
                                    <p className="roboto mb-2">Availability: {cat.stock}</p>
                                    <div className="mb-6 flex justify-between items-center">
                                        <p className="roboto">Preparation time: {cat.time}</p>
                                        <p className="roboto">Customizable: {cat.customization}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <Link to={`/viewDetails/${cat._id}`}><button className="btn border-none bg-[#4f7942b4] text-white hover:text-slate-400 hover:bg-[#4f79424d]">View Details</button></Link>
                                       
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default CategorySection;