import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";


import Nav from './components/Nav.jsx'
import Search from './components/Search.jsx'
import PhotoList from './components/PhotoList.jsx'
import './App.css'
import apiKey from './config.js'
import PageNotFound from './components/PageNotFound.jsx';


function App() {
  const [query, setQuery] = useState("cats");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  let results;

  const fetchData = (query) => {
    setLoading(true);
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        setPhotos(responseData.photos.photo)
        setLoading(false);
      })
      .catch(error => console.log("Error fetching and parsing data.", error));
  };

  const handleQueryChange = searchText => {
    setQuery(searchText);
  }

  useEffect(() => {
    fetchData(query);
  }, [query]);

  return (
    <div className="container">
      <Search fetchData={fetchData} />
      <Nav setQuery={setQuery} />
      <Routes>
        <Route path="/" element={<Navigate to="cats" />} />
        <Route path="/cats" element={<PhotoList data={photos} title={query} />} />
        <Route path="/dogs" element={<PhotoList data={photos} title={query} />} />
        <Route path="/computers" element={<PhotoList data={photos} title={query} />} />
        <Route path="/search/:query" element={<PhotoList data={photos} title={query} />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App
