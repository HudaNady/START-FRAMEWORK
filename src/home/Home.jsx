import React from 'react'
import { ReactComponent as MyIcon } from '../images/avataaars.svg';
export default function Home() {
  return <>
    <div className='bg-color mt-5 pt-5 '>
      <div className='container text-center py-5'>
        <MyIcon className='w-25'/>
        <h1 className='pt-4'>START FRAMEWORK</h1>
        <div className='d-flex justify-content-center align-items-center py-2 '>
          <div className='hr'></div>
          <i class="fa-solid fa-star mx-3"></i>
          <div className='hr'></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  </>
}
