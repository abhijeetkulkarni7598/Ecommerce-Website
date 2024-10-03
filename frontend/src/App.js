import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SearchResults from './components/SearchBar';
import ProductPage from './pages/ProductPage';
import Login from './components/Login';
import Register from './components/Register';
import { Provider } from 'react-redux';
import store from './redux/store';
import { useState, useEffect } from 'react';


function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <Provider store={store}>
      <Router>
      <div
      className={`bg-gray-900 overflow-x-hidden text-white min-h-screen  
      ${scrollY > 0 ? 'bg-gray-900' : 'bg-gray-900'}`}
    >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
