import Image from "next/image";

const PromoBanner = () => {
    return <div>
        <div className="bg-purple-50 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-10 md:py-16">
            {/* Text Section */}
            <div className="text-center md:text-left space-y-4">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-purple-700">
                    Big Deal
                </h2>
                <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium text-gray-800">
                    30% Off for New Customers
                </h1>
                <button className="bg-purple-600 hover:bg-purple-700 text-white text-sm md:text-base px-6 py-3 rounded-lg transition duration-300">
                    Shop Now
                </button>
            </div>

            {/* Image Section */}
            <div className="mt-8 md:mt-0 flex items-center justify-center">
                <Image
                    src="/modal.png" // Replace with your image path
                    alt="Fashionable Couple"
                    width={800} // Set the default width
                    height={600} // Set the default height
                    className="w-full max-w-md md:max-w-lg lg:max-w-xl object-cover"
                />
            </div>
        </div>
    </div>;
};
export default PromoBanner;