// src/layout/RootLayout.jsx
import React, { useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import HeaderTop from '../components/HeaderTop/HeaderTop';
import Footer from '../components/Footer/Footer';
import AppointmentForm from '../components/AppointmentForm/AppointmentForm';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import BreadBg1 from '../assets/img/breadcrumb-bg1.webp'; // Import images here
import BreadBg2 from '../assets/img/breadcrumb-bg2.webp'; // Import images here
import BreadBg3 from '../assets/img/breadcrumb-bg3.webp'; // Import images here
import BreadContact from '../assets/img/breadcrumb-contact.webp'; // Import images here
import { FaWhatsapp } from "react-icons/fa";

const RootLayout = () => {
  const appointmentFormRef = useRef(null);
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Define the headings for each specific route
  const headingMap = {
    '/about': 'About',
    '/gallery': 'Gallery',
    '/publications': 'Publications',
    '/blog': 'Blogs',
    '/contact': 'Contact',
    // Add more paths and corresponding headings as needed
  };

  // Define the images for each specific route
  const imageMap = {
    '/about': BreadBg1,
    '/gallery': BreadBg2,
    '/publications': BreadBg3,
    '/blog': BreadBg2,
    '/contact': BreadContact,
    // Add more paths and corresponding images as needed
  };

  // Generate breadcrumb segments
  const pathSegments = pathnames.map((path, index) => ({
    path: '/' + pathnames.slice(0, index + 1).join('/'),
    label: path.charAt(0).toUpperCase() + path.slice(1)
  }));

  // Determine the heading based on the current path, excluding the homepage
  const getHeading = () => {
    if (pathnames.length === 0) return null; // No heading for the homepage
    const fullPath = '/' + pathnames.join('/');
    return headingMap[fullPath] || 'Page'; // Default heading if not found in map
  };

  // Determine the image based on the current path
  const getImage = () => {
    if (pathnames.length === 0) return null; // No image for the homepage
    const fullPath = '/' + pathnames.join('/');
    return imageMap[fullPath] || '/path/to/default-image.jpg'; // Default image if not found in map
  };

  const handleAppointmentClick = () => {
    if (appointmentFormRef.current) {
      appointmentFormRef.current.showForm();
    }
  };

  return (
    <>
      <div class="floating_btn">
        <a target="_blank" href="https://api.whatsapp.com/send?phone=919147096309&text=Hi%20we%20need%20help%20regarding%20">
          <div class="contact_icon">
            <FaWhatsapp />
          </div>
        </a>
      </div>
      <div className="header_area">
        <HeaderTop />
        <Header onAppointmentClick={handleAppointmentClick} />
      </div>
      <main>
        {pathnames.length > 0 && (
          <Breadcrumb pathSegments={pathSegments} heading={getHeading()} image={getImage()} />
        )}
        <Outlet context={{ handleAppointmentClick }} />
      </main>
      <Footer />
      <AppointmentForm ref={appointmentFormRef} />
    </>
  );
};

export default RootLayout;
