'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import Image from 'next/image';

const Collection = () => {
    return <div className='mt-10'>
        <Swiper
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className="bg-purple-50 flex flex-col md:flex-row items-center justify-between py-10 px-4 md:px-20">
                    {/* Left Section - Image */}
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/man2.jpg"
                            alt="Men Collection"
                            className="w-full max-w-md md:max-w-lg"
                            width={400}
                            height={300}
                            priority
                        />
                    </div>

                    {/* Right Section - Text */}
                    <div className="flex-1 mt-6 md:mt-0 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                            <span className="text-black">MEN</span> <span className="text-blue-600">COLLECTION</span>
                        </h1>
                        <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-md text-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 flex items-center gap-2">
                            Shop Now
                            <span className="inline-block transform rotate-45">➜</span>
                        </button>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="bg-purple-50 flex flex-col md:flex-row items-center justify-between py-10 px-4 md:px-20">
                    {/* Left Section - Image */}
                    <div className="flex-1 flex justify-center">
                        <Image
                            src="/man.jpg"
                            alt="Men Collection"
                            className="w-full max-w-md md:max-w-lg"
                            width={400}
                            height={300}
                            priority
                        />
                    </div>

                    {/* Right Section - Text */}
                    <div className="flex-1 mt-6 md:mt-0 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                            <span className="text-black">MEN</span> <span className="text-blue-600">COLLECTION</span>
                        </h1>
                        <button className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-md text-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 flex items-center gap-2">
                            Shop Now
                            <span className="inline-block transform rotate-45">➜</span>
                        </button>
                    </div>
                </div>
            </SwiperSlide>


        </Swiper>
    </div>;
};
export default Collection;