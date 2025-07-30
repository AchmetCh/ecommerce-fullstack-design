// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuth } from "../../ContextApi";

// const Header = () => {
//   const { cartItems, user, logout, searchQuery, handleSearch, handleCategorySelect } = useAuth();
//   const [localSearch, setLocalSearch] = useState("");

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     handleSearch(localSearch);
//   };

//   const handleSearchInput = (value) => {
//     setLocalSearch(value);
//     handleSearch(value); // Real-time search
//   };

//   return (
//     <>
//       {/* Top Menu Bar */}
//       <div className="bg-gray-800 text-white py-2">
//         <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
//           <div className="text-sm">
//             Welcome to MyShop - Free shipping on orders over $50!
//           </div>
//           <div className="flex space-x-4 text-sm">
//             {user ? (
//               <>
//                 <span>Hello, {user.name || user.email}</span>
//                 <Link to="/add-product" className="hover:text-blue-300 transition">
//                   Add New Product
//                 </Link>
//                 <Link to="/orders" className="hover:text-blue-300 transition">
//                   View All Orders
//                 </Link>
//                 <button 
//                   onClick={logout}
//                   className="hover:text-red-300 transition"
//                 >
//                   Logout
//                 </button>
//               </>
//             ) : (
//               <>
//                 <Link to="/login" className="hover:text-blue-300 transition">
//                   Login
//                 </Link>
//                 <Link to="/register" className="hover:text-blue-300 transition">
//                   Register
//                 </Link>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Main Header */}
//       <header className="bg-white shadow-md p-4">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
//           {/* Logo */}
//           <Link
//             to="/"
//             className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition"
//           >
//             MyShop
//           </Link>

//           {/* Search Bar */}
//           <div className="w-full lg:w-1/2">
//             <form onSubmit={handleSearchSubmit} className="relative">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={localSearch}
//                 onChange={(e) => handleSearchInput(e.target.value)}
//                 className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-200"
//               />
//               <button
//                 type="submit"
//                 className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//               >
//                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//                 </svg>
//               </button>
//             </form>
//           </div>

//           {/* Cart Button */}
//           <Link
//             to="/cart"
//             className="relative p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
//           >
//             <svg
//               className="w-6 h-6 text-gray-700"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6m0 0H17M9 19a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z"
//               />
//             </svg>
//             {cartItems.length > 0 && (
//               <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1 min-w-[20px] text-center">
//                 {cartItems.length}
//               </span>
//             )}
//           </Link>
//         </div>

//         {/* Category Navigation */}
//         <div className="max-w-7xl mx-auto mt-4">
//           <div className="flex flex-wrap justify-center lg:justify-start gap-2">
//             <Link
//               to="/products"
//               className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
//             >
//               All Products
//             </Link>
//             {["Men", "Women", "Kids", "Electronics", "Home"].map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => handleCategorySelect && handleCategorySelect(cat.toLowerCase())}
//                 className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm font-medium"
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;

import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../ContextApi";

const Header = () => {
  const { cartItems, user, logout, searchQuery, handleSearch, handleCategorySelect } = useAuth();
  const [localSearch, setLocalSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(localSearch);
    // Navigate to products page if not already there
    if (location.pathname !== '/products') {
      navigate('/products');
    }
  };

  const handleSearchInput = (value) => {
    setLocalSearch(value);
    handleSearch(value); // Real-time search
    // Navigate to products page if not already there and there's a search query
    if (value && location.pathname !== '/products') {
      navigate('/products');
    }
  };

  const handleCategoryClick = (category) => {
    handleCategorySelect(category);
    // Navigate to products page if not already there
    if (location.pathname !== '/products') {
      navigate('/products');
    }
  };

  return (
    <>
      {/* Top Menu Bar */}
      <div className="bg-gray-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="text-sm">
            Welcome to MyShop - Free shipping on orders over $50!
          </div>
          <div className="flex space-x-4 text-sm">
            {user ? (
              <>
                <span>Hello, {user.name || user.email}</span>
                <Link to="/add-product" className="hover:text-blue-300 transition">
                  Add New Product
                </Link>
                <Link to="/orders" className="hover:text-blue-300 transition">
                  View All Orders
                </Link>
                <button 
                  onClick={logout}
                  className="hover:text-red-300 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="hover:text-blue-300 transition">
                  Login
                </Link>
                <Link to="/register" className="hover:text-blue-300 transition">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition"
          >
            MyShop
          </Link>

          {/* Search Bar */}
          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={localSearch}
                onChange={(e) => handleSearchInput(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-200"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>

          {/* Cart Button */}
          <Link
            to="/cart"
            className="relative p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6m0 0H17M9 19a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z"
              />
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full px-2 py-1 min-w-[20px] text-center">
                {cartItems.length}
              </span>
            )}
          </Link>
        </div>

        {/* Category Navigation */}
        <div className="max-w-7xl mx-auto mt-4">
          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            <Link
              to="/products"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-sm font-medium"
            >
              All Products
            </Link>
            {["Men", "Women", "Kids", "Electronics", "Home"].map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryClick(cat.toLowerCase())}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition text-sm font-medium"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;