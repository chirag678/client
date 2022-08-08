import React from 'react'
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <div className='flex flex-col items-center h-full w-full bg-base px-4 md:px-8 text-white'>
        <Navbar />
        <main className="flex flex-col h-full max-w-7xl w-full min-h-screen pt-20 md:pt-32">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout