import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Brand Info */}
        <div>
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-600 text-2xl font-bold">My Brand</span>
          </div>
          <p className="text-sm mb-4">
            Best information about the company goes here but now lorem ipsum is
          </p>
          <div className="flex space-x-3 text-gray-600">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
            <FaEnvelope className="hover:text-red-500 cursor-pointer" />
            <FaYoutube className="hover:text-red-600 cursor-pointer" />
          </div>
        </div>

        {/* Links Sections */}
        <div>
          <h4 className="font-semibold mb-3">About</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Partnership</h4>
          <ul className="space-y-1 text-sm">
            <li>About Us</li>
            <li>Find store</li>
            <li>Categories</li>
            <li>Blogs</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Information</h4>
          <ul className="space-y-1 text-sm">
            <li>Help Center</li>
            <li>Money Refund</li>
            <li>Shipping</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">For users</h4>
          <ul className="space-y-1 text-sm">
            <li>Login</li>
            <li>Register</li>
            <li>Settings</li>
            <li>My Orders</li>
          </ul>

          {/* App Store Links */}
          <div className="mt-4 space-y-2">
            <img
              src="https://img.favpng.com/18/23/8/app-store-apple-download-logo-png-favpng-2BMS9KidgmX2fHMtAhjpVHway.jpg"
              alt="App Store"
              className="w-32"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="w-32"
            />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} My Brand. All rights reserved. | Designed by
          <a href="https://github.com/AchmetCh" className="text-blue-600 hover:text-blue-700"> Achmet Ch</a>
        </p>
 
      </div>
    </footer>
  );
};

export default Footer;
