
'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";

const ProductPage = ({ params }) => {
    const products = [
        { id: 1, name: "Indian Sharee", price: "BDT 2,300", img: "/sharee.jpg" },
        { id: 2, name: "Hoodie", price: "BDT 2,900", img: "/Hoodie.jpg" },
        { id: 3, name: "Plazu", price: "BDT 2,300", img: "/Plazu.jpg" },
        { id: 4, name: "Jacket", price: "BDT 2,100", img: "/Jacket.jpg" },
        { id: 5, name: "T-Shirt", price: "BDT 2,200", img: "/T-Shirt.jpg" },
        { id: 6, name: "jicket", price: "BDT 2,300", img: "/3.jpg" },
        { id: 7, name: "show", price: "BDT 2,400", img: "/SHOE.jpg" },
        { id: 8, name: "Kurta", price: "BDT 200", img: "/pexels-yankrukov-8819763.jpg" },
        { id: 9, name: "Haft-shirt", price: "BDT 2,300", img: "public/Haft-shirt.jpg" },
        { id: 10, name: "show", price: "BDT 2,300", img: "/shoe2.jpg" },
        { id: 11, name: "Leder", price: "BDT 2,300", img: "/Leder.jpg" },
        { id: 12, name: "Check Shirt", price: "BDT 200", img: "/Check Shirt.jpg" },
        { id: 13, name: "pant", price: "BDT 100", img: "/pant.jpg" },
    ];
    const images = [
        "/man2.jpg",
        "/man2.jpg",
        "/man2.jpg",
        "/man.jpg",
        "/man.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState(null);


    useEffect(() => {
        const selectedProduct = products.find((p) => p.id === parseInt(params.id));
        setProduct(selectedProduct);
    }, [params.id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="bg-purple-50 min-h-screen py-8 px-4 md:px-20">
            {/* Breadcrumb */}
            <p className="text-sm text-gray-500 mb-4">
                Feature Product / <span className="text-purple-600">New Arrival</span>
            </p>

            <div className="flex flex-col md:flex-row gap-10">
                {/* Left Section: Image and Carousel */}
                <div className="flex-1">
                    <div className="relative">
                        <Image
                            src={product.img}
                            alt="Product"
                            width={400} // Specify the width in pixels
                            height={400} // Specify the height in pixels
                            className="w-full max-w-md mx-auto object-cover rounded-lg shadow-md"
                        />

                        {/* Carousel Controls */}
                        <button
                            onClick={handlePrev}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
                        >
                            {"<"}
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2 hover:bg-gray-300"
                        >
                            {">"}
                        </button>
                    </div>

                    {/* Thumbnail Carousel */}
                    <div className="flex justify-center gap-4 mt-4">
                        {images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-16 h-16 object-cover border ${currentIndex === index
                                    ? "border-purple-600"
                                    : "border-gray-300"
                                    } rounded-md cursor-pointer`}
                                onClick={() => handleThumbnailClick(index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Right Section: Product Info */}
                <div className="flex-1">
                    <p className="bg-purple-100 text-purple-600 text-sm font-semibold py-1 px-3 rounded-md inline-block mb-4">
                        New Arrival
                    </p>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>

                    {/* Ratings and Reviews */}
                    <div className="flex items-center mb-4">
                        <div className="text-yellow-400">⭐⭐⭐⭐☆</div>
                        <p className="text-gray-500 text-sm ml-2">(4.0) 121 reviews</p>
                    </div>

                    {/* Price */}
                    <p className="text-2xl font-bold text-gray-800 mb-4">{product.price}</p>

                    {/* Size Options */}
                    <div className="mb-4">
                        <p className="font-semibold text-gray-700 mb-2">Available Size</p>
                        <div className="flex gap-2">
                            {["S", "M", "L", "XL"].map((size) => (
                                <button
                                    key={size}
                                    className="border border-gray-300 px-4 py-2 rounded-md hover:border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Color Options */}
                    <div className="mb-4">
                        <p className="font-semibold text-gray-700 mb-2">Available Color</p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="off-white"
                                    name="color"
                                    className="form-radio text-purple-600"
                                />
                                <label htmlFor="off-white" className="text-gray-700">
                                    Off White
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    id="black"
                                    name="color"
                                    className="form-radio text-purple-600"
                                />
                                <label htmlFor="black" className="text-gray-700">
                                    Black
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="mb-4">
                        <p className="font-semibold text-gray-700 mb-2">Quantity</p>
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                                className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full"
                            >
                                -
                            </button>
                            <span className="text-lg font-semibold">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-700 rounded-full"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 mt-4">
                        <button className="bg-purple-600 text-white py-2 px-6 rounded-md font-medium hover:bg-purple-700">
                            Buy Now
                        </button>
                        <button className="border border-purple-600 text-purple-600 py-2 px-6 rounded-md font-medium hover:bg-purple-100">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="flex justify-center gap-8 mt-10 border-t border-gray-200 pt-4">
                <button className="text-gray-600 hover:text-purple-600">Details</button>
                <button className="text-gray-600 hover:text-purple-600">Review & Rating</button>
                <button className="text-gray-600 hover:text-purple-600">Discussion</button>
            </div>
            <div className="bg-purple-50 py-8 px-4 md:px-20">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                    {/* Sort Dropdown */}
                    <div className="relative ">
                        <select
                            className="border border-gray-300 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="Newest">Newest</option>
                            <option value="Highest Rated">Highest Rated</option>
                            <option value="Lowest Rated">Lowest Rated</option>
                        </select>
                    </div>

                    {/* Review Summary */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">Product Review</h3>
                            <p className="text-purple-600 text-sm">(121 reviews)</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="text-yellow-400">⭐⭐⭐⭐☆</div>
                            <p className="text-gray-700 font-medium">(4.0)</p>
                        </div>
                    </div>
                </div>

                <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Reviews List */}
                    <div className="md:col-span-2 space-y-4">
                        {[1, 2].map((id) => (
                            <div
                                key={id}
                                className="bg-white p-4 rounded-lg shadow-md border"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                        <div>
                                            <h4 className="font-bold text-gray-800 text-sm">
                                                Cameron Williamson
                                            </h4>
                                            <p className="text-gray-500 text-xs">3 days ago</p>
                                        </div>
                                    </div>
                                    <div className="text-yellow-400">⭐⭐⭐⭐☆</div>
                                </div>
                                <p className="text-gray-700 text-sm">Very Nice!!</p>
                                <div className="mt-2 text-gray-500 text-xs flex items-center gap-2">
                                    👍 10
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Review Chart */}
                    <div className="md:col-span-1">
                        <div className="space-y-2">
                            {[
                                { rating: 5, count: 50 },
                                { rating: 4, count: 5 },
                                { rating: 3, count: 10 },
                                { rating: 2, count: 30 },
                                { rating: 1, count: 2 },
                            ].map((item) => (
                                <div key={item.rating} className="flex items-center gap-2">
                                    <span className="text-gray-600 text-sm">{item.rating}⭐</span>
                                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                                        <div
                                            className="bg-yellow-400 h-2 rounded-full"
                                            style={{
                                                width: `${(item.count / 50) * 100}%`,
                                            }}
                                        ></div>
                                    </div>
                                    <span className="text-gray-500 text-sm">{item.count}</span>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ProductPage;
