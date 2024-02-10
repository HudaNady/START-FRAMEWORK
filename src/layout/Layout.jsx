import React from 'react'
import Navbar from '../Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/Footer'

export default function Layout() {
  return <>
  <Navbar />
  <div className='text-white'>
  <Outlet />
  </div>
  <Footer/>
  </>
}

