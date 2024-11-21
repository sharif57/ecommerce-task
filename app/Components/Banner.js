import Image from "next/image";

const Banner = () => {
    return <div>
        <div>
            {/* Hero Section */}
            <div className="relative bg-black">
                <div className="relative w-full h-screen">
                    <Image
                        src="/banner.jpg" // Replace with the actual image URL
                        alt="Hero Background"
                        layout="fill" // Automatically fills the parent container
                        objectFit="cover" // Ensures the image covers the container
                        className="opacity-70"
                    />
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-8 text-white">
                    <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                        Elevate Your Everyday Style
                    </h1>
                    <p className="text-lg sm:text-xl mb-6">
                        Discover the Latest Trends in Sustainable Fashion
                    </p>
                    <button className="btn btn-primary text-white px-6 py-2 rounded-full text-lg">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Info Section */}
            <div className="bg-purple-500 ">
                <div className="container mx-auto text-white flex flex-wrap justify-center sm:justify-between items-center py-6 px-4 sm:px-8 space-y-4 sm:space-y-0">
                    {/* Free Shipping */}
                    <div className="flex items-center space-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                        >
                            <path d="M3 6v15h18V6H3zm16 13H5V8h14v11zm-6-3h-2v-2H9v-2h2V9h2v2h2v2h-2v2z" />
                        </svg>
                        <div>
                            <h4 className="font-bold">Free Shipping</h4>
                            <p className="text-sm">Buy BDT 3000+ & Get Free Delivery in any place</p>
                        </div>
                    </div>

                    {/* 7 Days Exchange */}
                    <div className="flex items-center space-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                        >
                            <path d="M13 3v2h3.586l-7.293 7.293 1.414 1.414L18 6.414V10h2V3h-7zm-2 16v-2H7.414l7.293-7.293-1.414-1.414L6 15.586V12H4v7h7z" />
                        </svg>
                        <div>
                            <h4 className="font-bold">7 Days Exchange</h4>
                            <p className="text-sm">
                                Exchange Within 7 Days With Similar Type of Products
                            </p>
                        </div>
                    </div>

                    {/* 100% Payment Secure */}
                    <div className="flex items-center space-x-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-8 h-8"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2C7.03 2 2.5 4.42 2.5 9.39 2.5 14.88 12 22 12 22s9.5-7.12 9.5-12.61C21.5 4.42 16.97 2 12 2zm0 16.91c-3.92-3.07-7-6.4-7-9.52 0-1.98 2.91-3.99 7-3.99 4.09 0 7 2.01 7 3.99 0 3.12-3.08 6.45-7 9.52zM12 7c-1.71 0-3.25.93-4.03 2.36l1.48.85c.52-.94 1.55-1.56 2.55-1.56 1.34 0 2.5.89 2.5 2s-1.16 2-2.5 2c-.41 0-.8-.13-1.13-.33L9.43 12c.7.63 1.62 1 2.57 1 2.21 0 4-1.79 4-4s-1.79-4-4-4z" />
                        </svg>
                        <div>
                            <h4 className="font-bold">100% Payment Secure</h4>
                            <p className="text-sm">
                                Cash on Delivery and Secured Online Payment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default Banner;