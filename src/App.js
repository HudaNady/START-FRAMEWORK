import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './home/Home'
import About from './about/About'
import Contact from './contact/Contact'
import Portfolio from './portfolio/Portfolio'
import NotFound from './notFound/NotFound'



export default function App() {
  const routers=createBrowserRouter([
    {path:"",element:<Layout/> , children:[
      {index:true,element:<Home />},
      {path:"about",element:<About />},
      {path:"contact",element:<Contact />},
      {path:"portfolio",element:<Portfolio />},
      {path:"*",element:<NotFound />},
    ]},
    ])
  return <>
  <RouterProvider router={routers}/>
  </>
}
