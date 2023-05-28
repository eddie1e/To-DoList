'use client'

import React, { useEffect, useState } from 'react';
import { getCurrentTime } from '../components/getTime';

const Footer = () => {
  const [currentDateTime, setCurrentDateTime] = useState(getCurrentTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getCurrentYear = () => new Date().getFullYear();

  return (
    <footer>
      <div className="flex justify-center items-center text-slate-200 font-medium text-xl">
        <div className="flex items-center justify-center h-full">
          <h1 className="mr-2">{currentDateTime}</h1>
          <h2>{getCurrentYear()}</h2>
        </div>
      </div>
    </footer>
  );
};



export default Footer;
