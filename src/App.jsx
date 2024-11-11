// src/App.js
import React from 'react';
import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { About, Blog, Contact, Gallery, Home, Publications } from './pages';
import RootLayout from './layout/RootLayout';
import 'react-toastify/dist/ReactToastify.css';

// Create router configuration
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="publications" element={<Publications />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

const App = () => (
  <RouterProvider router={router} />
);

export default App;
