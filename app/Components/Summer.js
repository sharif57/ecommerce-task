'use client';

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Summer = () => {
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

    const [startIndex, setStartIndex] = useState(0);
    const itemsPerPage = 8; // Number of items visible at once
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
                        <h2 className="text-lg font-semibold text-purple-600 uppercase">Summer</h2>
                        <h3 className="text-3xl font-bold mb-6">Big Deals</h3>
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
                        <Link href={`/posts/${product.id}`} key={product.id} className="bg-white p-4 rounded-lg shadow-md">
                            <Image
                                src={product.img}
                                alt={product.name}
                                className="w-full h-56 object-cover rounded-lg mb-4"
                                height={400}
                                width={400}
                            />
                            <div className="flex justify-stat items-center text-yellow-400 mb-2">
                                <span className="mr-1">⭐⭐⭐⭐☆</span>
                                <span className="text-gray-500 text-sm">(50)</span>
                            </div>
                            <div className="flex justify-between">
                                <h4 className="text-lg font-semibold">{product.name}</h4>
                                <p className="text-gray-700">{product.price}</p>
                            </div>
                            <button className="mt-4 w-full py-2 text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">
                                    Add to Cart
                            </button>
                        </Link>
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

export default Summer;
