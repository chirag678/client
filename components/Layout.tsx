import Head from 'next/head';
import React from 'react'
import { ToastContainer } from 'react-toastify';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>D-Rex</title>
        <link rel="shortcut icon" href="/images/logo-transparent.png" />
      </Head>
      <ToastContainer />
      <div className='flex flex-col items-center h-full w-full px-4 md:px-8 text-white'>
        <Navbar />
        <main className="flex flex-col h-full max-w-7xl w-full min-h-screen pt-20 md:pt-32">{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout