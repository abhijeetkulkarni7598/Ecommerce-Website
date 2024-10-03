import React, { useState, useEffect, useRef } from 'react';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';



const Home = () => {

  const searchBarRef = useRef(null);
  const [isSearchBarSticky, setIsSearchBarSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > searchBarRef.current.offsetTop) {
        setIsSearchBarSticky(true);
      } else {
        setIsSearchBarSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex h-screen">
    <Navbar />
    <div className="flex-grow w-0 p-4">
      <div className="container mx-auto py-8">
        <h2 className="text-3xl font-bold my-6">Trending Products</h2>
        <div className="flex flex-col">
          <ProductList />
        </div>
        <div ref={searchBarRef} className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-1/2 bg-grey-900 shadow-md p-4 ${isSearchBarSticky ? 'z-10' : ''}`}>          <SearchBar />
      </div>
      </div>
    </div>
    </div>
  
  );
};

export default Home;
