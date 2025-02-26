import React, { useState } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";


import Nav from './components/Nav.jsx'
import Search from './components/Search.jsx'
import PhotoList from './components/PhotoList.jsx'
import './App.css'

function App() {
  const [query, setQuery] = useState("cats");

  const handleQueryChange = searchText => {
    setQuery(searchText);
  }

  return (
    <div className="container">
      <Search searchQuery={handleQueryChange}/>
      <Nav setQuery={setQuery}/>
      <Routes>
        <Route path="/" element={<Navigate to="cats" />} />
        <Route path="/cats" element={<PhotoList query={query}/>} />
        <Route path="/dogs" element={<PhotoList query={query} />} />
        <Route path="/computers" element={<PhotoList query={query} />} />
        <Route path="/search/:query" element={<PhotoList query={query} />} />
      </Routes>
    </div>
  )
}

export default App
