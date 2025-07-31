import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendApi } from "../services/Api";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCategories, setShowCategories] = useState(false);
  const [slides, setSlides] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${backendApi}/products`);
        setSlides(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Categories for sidebar
  const categories = [
    { name: "Automobiles", icon: "🚗" },
    { name: "Clothes and wear", icon: "👕" },
    { name: "Home interiors", icon: "🏠" },
    { name: "Computer and tech", icon: "💻" },
    { name: "Tools, equipments", icon: "🔧" },
    { name: "Sports and outdoor", icon: "⚽" },
    { name: "Animal and pets", icon: "🐕" },
    { name: "Machinery tools", icon: "⚙️" },
    { name: "More category", icon: "📋" },
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (slides.length === 0) return;

    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4 lg:hidden"></div>
          <div className="flex gap-4">
            <div className="w-64 h-96 bg-gray-200 rounded-lg hidden lg:block"></div>
            <div className="flex-1 flex gap-4">
              <div className="flex-1 h-80 bg-gray-200 rounded-lg"></div>
              <div className="w-48 space-y-4 hidden xl:block">
                <div className="h-24 bg-gray-200 rounded-lg"></div>
                <div className="h-16 bg-gray-200 rounded-lg"></div>
                <div className="h-16 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Mobile Categories Toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setShowCategories(!showCategories)}
          className="flex items-center justify-between w-full bg-white rounded-lg shadow-sm border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          <span className="flex items-center">
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Browse Categories
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${
              showCategories ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Mobile Categories Dropdown */}
        {showCategories && (
          <div className="mt-2 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-2 gap-0">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="flex items-center px-3 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-b border-r border-gray-100 last:border-b-0 text-left"
                  onClick={() => setShowCategories(false)}
                >
                  <span className="mr-2 text-base">{category.icon}</span>
                  <span className="truncate">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-4">
        {/* Desktop Categories Sidebar */}
        <div className="w-64 bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hidden lg:block flex-shrink-0">
          <ul className="divide-y divide-gray-100">
            {categories.map((category, index) => (
              <li key={index}>
                <button className="w-full flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors group text-left">
                  <span className="mr-3 text-lg">{category.icon}</span>
                  <span className="group-hover:text-blue-600 flex-1">
                    {category.name}
                  </span>
                  <svg
                    className="ml-auto w-4 h-4 text-gray-400 group-hover:text-blue-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col xl:flex-row gap-4 min-w-0">
          {/* Main Slider */}
          <div className="flex-1 relative overflow-hidden rounded-lg shadow-lg min-w-0">
            {slides.length > 0 && (
              <>
                <div
                  className="flex transition-transform duration-500 ease-in-out h-48 sm:h-64 md:h-80"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`w-full h-full relative flex items-center justify-between px-4 sm:px-6 md:px-8 bg-gradient-to-r from-blue-600 to-purple-600 flex-shrink-0`}
                      style={{
                        backgroundImage: slide.image
                          ? `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`
                          : undefined,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      {/* Text Content */}
                      <div className="flex-1 z-10 pr-4">
                        <h2 className="text-lg sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2">
                          {slide.name || slide.title || "Featured Product"}
                        </h2>
                        <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 md:mb-6">
                          {slide.category || slide.subtitle || "Special Offer"}
                        </h3>
                        <p className="text-sm sm:text-base text-white mb-4 opacity-90">
                          {slide.description && slide.description.length > 100
                            ? `${slide.description.substring(0, 100)}...`
                            : slide.description || "Discover amazing products"}
                        </p>
                        {slide.price && (
                          <p className="text-lg sm:text-xl font-bold text-yellow-300 mb-4">
                            ${slide.price}
                          </p>
                        )}
                        <button className="bg-white text-gray-700 px-4 sm:px-6 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors shadow-sm text-sm sm:text-base">
                          View Product
                        </button>
                      </div>

                      {/* Product Image */}
                      <div className="flex-shrink-0 flex justify-end items-center">
                        <div className="relative">
                          <div className="w-24 h-20 sm:w-40 sm:h-32 md:w-60 md:h-48 lg:w-80 lg:h-60 bg-white bg-opacity-10 rounded-lg flex items-center justify-center backdrop-blur-sm overflow-hidden">
                            {slide.image ? (
                              <img
                                src={slide.image}
                                alt={slide.name || slide.title || "Product"}
                                className="w-full h-full object-cover rounded-lg opacity-90"
                              />
                            ) : (
                              <div className="text-2xl sm:text-4xl md:text-6xl opacity-80">
                                🛍️
                              </div>
                            )}
                          </div>
                          {/* Decorative elements */}
                          <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white bg-opacity-20 rounded-full hidden sm:block"></div>
                          <div className="absolute -bottom-2 -left-2 sm:-bottom-6 sm:-left-6 w-6 h-6 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-white bg-opacity-10 rounded-full hidden sm:block"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-600 rounded-full p-1.5 sm:p-2 transition-all shadow-md z-10"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-gray-600 rounded-full p-1.5 sm:p-2 transition-all shadow-md z-10"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                        index === currentSlide
                          ? "bg-white shadow-md"
                          : "bg-white bg-opacity-50 hover:bg-opacity-75"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Side Cards */}
          <div className="w-full xl:w-48 xl:flex-shrink-0">
            <div className="xl:space-y-4">
              <div className="flex xl:flex-col gap-4 xl:gap-0 xl:space-y-4 overflow-x-auto pb-2 xl:pb-0">
                {/* User Profile Card */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex-shrink-0 w-64 xl:w-full">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Hi</p>
                      <p className="text-xs text-gray-500">let's get started</p>
                    </div>
                  </div>
                  <Link
                    to="/register"
                    className=""
                  >
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              
                  Join now
                      </button> 
                  </Link>
                  <Link
                    to="/login"
                    className=""
                  >
                    <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 transition mt-2">
                    Log in
                    </button>
                  </Link>
                 
                </div>

                {/* Promotion Card */}
                <div className="bg-gradient-to-br from-orange-400 to-orange-500 rounded-lg shadow-sm p-4 text-white flex-shrink-0 w-64 xl:w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium mb-1">Get US $10 off</p>
                      <p className="text-xs opacity-90">with a new supplier</p>
                    </div>
                    <div className="text-2xl">🎁</div>
                  </div>
                </div>

                {/* Quote Card */}
                <div className="bg-gradient-to-br from-teal-400 to-teal-500 rounded-lg shadow-sm p-4 text-white flex-shrink-0 w-64 xl:w-full">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium mb-1">
                        Send quotes with
                      </p>
                      <p className="text-xs opacity-90">supplier preferences</p>
                    </div>
                    <div className="text-2xl">📋</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
