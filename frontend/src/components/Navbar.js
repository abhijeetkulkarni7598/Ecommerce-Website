import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSearch, faList, faArrowRight, faUser } from '@fortawesome/free-solid-svg-icons';

 /*<nav className="bg-gray-900 text-white py-4">
  <div className="container mx-auto flex justify-between">
    <Link to="/" className="text-xl font-bold">E-Shop</Link>
    <div>
      <Link to="/login" className="mr-4">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  </div>
</nav>*/

/*<div className="bg-gray-800 w-64 text-white p-4">
      
      <h2 className="text-xl font-bold mb-4">Sidebar</h2>
      <ul>
        <li className="mb-2">Item 1</li>
        <li className="mb-2">Item 2</li>
        <li className="mb-2">Item 3</li>
      </ul>
    </div>*/


const Navbar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 w-16 flex flex-col justify-between p-4">
      <div>
        <ul>
          <li>
            <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-700">
              <FontAwesomeIcon icon={faHome} className="w-5 h-5 mr-2" />
              {/* <span className="hidden sm:inline-block">Home</span> */}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-700">
              <FontAwesomeIcon icon={faSearch} className="w-5 h-5 mr-2" />
              {/* <span className="hidden sm:inline-block">Search</span> */}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-700">
              <FontAwesomeIcon icon={faList} className="w-5 h-5 mr-2" />
              {/* <span className="hidden sm:inline-block">List</span> */}
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-700">
              <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 mr-2" />
              {/* <span className="hidden sm:inline-block">Arrow</span> */}
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center">
        <FontAwesomeIcon icon={faUser} className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Navbar;
