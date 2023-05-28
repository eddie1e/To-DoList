'use client'

import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children, containerClassName }) => {
  const [activePage, setActivePage] = useState('home');

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <div className={containerClassName}>
      <Header activePage={activePage} handlePageChange={handlePageChange} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;