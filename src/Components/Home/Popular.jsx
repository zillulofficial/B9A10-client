
const Popular = () => {
    return (
        <div>
            <div className=" text-center mb-20">
                <h3 className="Rancho text-5xl mb-4">Popular Choices</h3>
                <p>Explore our Popular Choices at MapleWhisper.com, featuring customer favorites in wooden
                    home decor and jute crafts. <br className="hidden lg:block" />Discover the most loved pieces that blend
                    natural elegance and timeless design.</p>
            </div>
            <div className="mb-24 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
                <div className="w-56 transition-all hover:cursor-pointer hover:scale-95 duration-500 ease hover:bg-slate-100">
                    <img className="flex mx-auto mb-3" src="https://i.postimg.cc/ZnM8nZSS/Jute-Home-Decor.jpg" alt="" />
                    <p className="pb-3 text-center Rancho text-green-800 text-xl">Jute Home Decor</p>
                </div>
                <div className="w-56 transition-all hover:cursor-pointer hover:scale-95 duration-500 ease hover:bg-slate-100">
                    <img className="flex mx-auto mb-3" src="https://i.postimg.cc/3R9CMmfW/Wooden-Home-Decor.jpg" alt="" />
                    <p className="pb-3 text-center Rancho text-green-800 text-xl">Wooden Home Decor</p>
                </div>
                <div className="w-56 transition-all hover:cursor-pointer hover:scale-95 duration-500 ease hover:bg-slate-100">
                    <img className="flex mx-auto mb-3" src="https://i.postimg.cc/0jQG9jhn/Wooden-Utensils-and-Kitchenware.jpg" alt="" />
                    <p className="pb-3 text-center Rancho text-green-800 text-xl">Wooden Utensils and Kitchenware</p>
                </div>
                <div className="w-56 transition-all hover:cursor-pointer hover:scale-95 duration-500 ease hover:bg-slate-100">
                    <img className="flex mx-auto mb-3" src="https://i.postimg.cc/yNmyPwFm/Wooden-Furniture-Sculptures.jpg" alt="" />
                    <p className="pb-3 text-center Rancho text-green-800 text-xl">Wooden Furniture & Sculptures</p>
                </div>
                <div className="w-56 transition-all hover:cursor-pointer hover:scale-95 duration-500 ease hover:bg-slate-100">
                    <img className="flex mx-auto mb-3" src="https://i.postimg.cc/ZRJFDVc1/Jute-and-wooden-jewellery.jpg" alt="" />
                    <p className="pb-3 text-center Rancho text-green-800 text-xl">Jute and wooden jewellery</p>
                </div>
                <div className="w-56 transition-all hover:cursor-pointer hover:scale-95 duration-500 ease hover:bg-slate-100">
                    <img className="flex mx-auto mb-3" src="https://i.postimg.cc/nhCVbDTr/Jute-Kitchenware-utensils.jpg" alt="" />
                    <p className="pb-3 text-center Rancho text-green-800 text-xl">Jute Kitchenware & utensils</p>
                </div>
            </div>
        </div>
    );
};

export default Popular;