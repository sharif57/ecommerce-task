/* eslint-disable react/no-unescaped-entities */
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";
import { FcManager } from "react-icons/fc";



// const Navbar = () => {
//     return <div>
//         <header className="bg-purple-50 border-b-2 border-purple-300">
//             <div className="container mx-auto flex justify-between items-center px-4 lg:px-8 py-3">
//                 {/* Logo */}
//                 <div className="flex items-center space-x-2">
//                     <img
//                         src="/logo.png" // Replace with your logo path
//                         alt="Logo"
//                         className="h-8 w-8"
//                     />
//                     <h1 className="text-xl font-semibold text-purple-600">We5ive</h1>
//                 </div>

//                 {/* Navigation Links */}
//                 <nav className="hidden md:flex items-center space-x-6">
//                     <a
//                         href="#home"
//                         className="text-gray-700 hover:text-purple-500 transition-colors"
//                     >
//                         Home
//                     </a>
//                     <a
//                         href="#shop"
//                         className="text-gray-700 hover:text-purple-500 transition-colors"
//                     >
//                         Shop
//                     </a>
//                     <a
//                         href="#deals"
//                         className="text-gray-700 hover:text-purple-500 transition-colors"
//                     >
//                         Deals
//                     </a>
//                     <a
//                         href="#new"
//                         className="text-gray-700 hover:text-purple-500 transition-colors"
//                     >
//                         What's New
//                     </a>
//                 </nav>

//                 {/* Search & Icons */}
//                 <div className="flex items-center space-x-4">
//                     {/* Search */}
// <div className="relative">
//     {/* Search Input */}
//     <input
//         type="text"
//         placeholder="Search"
//         className="w-full sm:w-auto px-10 py-2 border border-gray-300 rounded-full text-gray-700 focus:ring-2 focus:ring-purple-400 focus:outline-none"
//     />

//     {/* Search Icon */}
//     <IoSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
// </div>

//                     {/* Icons */}
// <div className="flex items-center space-x-3">
// <div className="relative">
//     {/* Cart Icon */}
//     <FaCartArrowDown className="text-gray-700 w-8 h-8" />

//     {/* Badge / Counter */}
//     <p className="absolute top-0 right-0  text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//         10
//     </p>
// </div>

// <FcManager className="size-10" />

//                     </div>
//                 </div>
//             </div>
//         </header>    </div>;
// };
// export default Navbar;

const Navbar = () => {
    return <div className="container mx-auto">
        <div className="navbar bg-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Home</a></li>
                        <li><a>Shop</a></li>
                        <li><a>Deals</a></li>
                        <li><a>What's new</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl inline-flex flex items-center">
                    We<span className="text-blue-500">5</span>ive
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Shop</a></li>
                    <li><a>Deals</a></li>
                    <li><a>What's new</a></li>
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <div className="relative bg-white">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full sm:w-auto px-10 py-2 border border-gray-300 bg-white rounded-full text-gray-700 focus:ring-2 focus:ring-purple-400 focus:outline-none"
                    />

                    {/* Search Icon */}
                    <IoSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                </div>

                <div className="relative">
                    {/* Cart Icon */}
                    <FaCartArrowDown className="text-gray-700 size-8" />

                    {/* Badge / Counter */}
                    <p className="absolute top-0 right-0  text-white text-xs font-bold rounded-full h-5 w-5 bg-red-300 flex items-center justify-center">
                        10
                    </p>
                </div>

                <FcManager className="size-10" />

            </div>
        </div>
    </div>;
};
export default Navbar;