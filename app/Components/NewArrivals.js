'use client';

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const NewArrivals = () => {
    const products = [
        { id: 1, name: "Indian Sharee", price: "BDT 2,300", img: "/path-to-image1.jpg" },
        { id: 2, name: "Hoodie", price: "BDT 2,300", img: "/path-to-image2.jpg" },
        { id: 3, name: "Plazu", price: "BDT 2,300", img: "/path-to-image3.jpg" },
        { id: 4, name: "Jacket", price: "BDT 2,300", img: "/path-to-image4.jpg" },
        { id: 5, name: "T-Shirt", price: "BDT 2,300", img: "/path-to-image5.jpg" },
        { id: 6, name: "Kurta", price: "BDT 2,300", img: "/path-to-image6.jpg" },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 4; // Number of items visible at once
    const endIndex = startIndex + itemsPerPage;

    const handlePrevClick = () => {
        setStartIndex((prevIndex) =>
            prevIndex - itemsPerPage < 0 ? products.length - itemsPerPage : prevIndex - itemsPerPage
        );
    };

    const handleNextClick = () => {
        setStartIndex((prevIndex) =>
            prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage
        );
    };

    return (
        <div className="bg-blue-50 py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header Section */}
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg font-semibold text-purple-600 uppercase">Featured Product</h2>
                        <h3 className="text-3xl font-bold mb-6">New Arrivals</h3>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={handlePrevClick}
                            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition"
                        >
                            <FaArrowLeft className="text-purple-600" />
                        </button>
                        <button
                            onClick={handleNextClick}
                            className="p-2 bg-white rounded-full shadow-md hover:shadow-lg transition"
                        >
                            <FaArrowRight className="text-purple-600" />
                        </button>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.slice(startIndex, endIndex).map((product) => (
                        <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-56 object-cover rounded-lg mb-4"
                            />
                            <div className="flex justify-between">
                                <h4 className="text-lg font-semibold">{product.name}</h4>
                                <p className="text-gray-700">{product.price}</p>
                            </div>
                            <button className="mt-4 w-full py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>

                {/* See More Button */}
                <div className="text-center mt-8">
                    <button className="px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition">
                        See More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewArrivals;
