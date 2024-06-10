

const Banner = () => {

    return (
        <div>
            <div className="carousel w-full h-[600px] mb-12">
                <div id="slide1" className="carousel-item relative w-full bg-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-center  container mx-auto">
                        <div>
                            <h2 className=" text-6xl mb-5 Rancho">Nature's Elegance in <br className="hidden md:block"/>Every Details</h2>
                            <p className="font-bold mb-3">Enhance your home with the serene beauty of artisanal wooden decor.</p>
                            <p className="text-gray-500">Discover the timeless beauty of handcrafted wooden home decor.
                                At MapleWhisper.com,<br className="hidden md:block"/> we bring you exquisite pieces that infuse
                                warmth and sophistication into your living spaces. <br className="hidden md:block"/>Shop now and
                                embrace the whisper of nature in your home.</p>
                        </div>
                        <div>
                            <img className="w-3/4 mx-auto" src="https://i.postimg.cc/HLgkqBjt/banner.png" alt="" />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full bg-gray-100">
                    <div className="flex  flex-col md:flex-row justify-between items-center container mx-auto">
                        <div>
                            <img className="w-3/4 mx-auto" src="https://i.postimg.cc/h4MwHBSG/banner2.png" alt="" />
                        </div>
                        <div className="text-end">
                            <h2 className="text-6xl mb-5 Rancho ">Crafted with Care,<br className="hidden md:block"/> Designed for You</h2>
                            <p className="font-bold mb-3">Experience the harmony of meticulous craftsmanship and elegant design.</p>
                            <p className="text-gray-500">Welcome to MapleWhisper.com, where each piece of wooden decor is
                                a masterpiece <br className="hidden md:block"/>of craftsmanship and design. Transform your home
                                with our unique collection that combines <br className="hidden md:block"/>elegance and nature's
                                charm. Explore our collection today.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full bg-gray-100">
                    <div className="flex  flex-col md:flex-row justify-around items-center container mx-auto">
                        <div>
                            <h2 className="text-6xl mb-5 Rancho">Transform Your Space <br className="hidden md:block"/>with Timeless Woodwork</h2>
                            <p className="font-bold mb-3">Infuse your home with the enduring charm of our exquisite wooden pieces.</p>
                            <p className="text-gray-500">At MapleWhisper.com, we believe in the beauty of natural wood.
                                Our curated selection <br className="hidden md:block"/>of home decor pieces adds a touch of rustic
                                elegance to any room. Discover the perfect addition <br className="hidden md:block"/>to your home
                                today and let nature's whisper inspire you.</p>
                        </div>
                        <div>
                            <img className=" mx-auto" src="https://i.postimg.cc/xTC7Q4C3/banner3.png" alt="" />
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;