import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/** importing our pages */
import Tracks from './tracks';
import Track from './track';


export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tracks />} />
        <Route path="/track/:trackId" element={<Track />} />
      </Routes>
    </BrowserRouter>
  );
}
