/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/pages/Layout.js
import React from 'react';
import Header from '@Components/Header/Header.jsx'
import Footer from '@Components/Footer/Footer.jsx'


const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;