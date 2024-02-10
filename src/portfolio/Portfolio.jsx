import React from 'react'
import {useState} from 'react'
import img1 from '../images/poert1.png'
import img2 from '../images/port2.png'
import img3 from '../images/port3.png'


export default function Portfolio() {
  const images=[img1,img2,img3,img1,img2,img3]
    
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [boxContainerDisplay, setBoxContainerDisplay] = useState(false);
  let imgClose=(event) =>{
    setBoxContainerDisplay(false);
}
let imgSrc=(index)=>{
  setCurrentIndex(index);
  setBoxContainerDisplay(true);
  console.log(index)
}
  return <>
  <div className=' container'>
    <div className='text-center py-5'>
      <h1 className='p-4 mt-5 main-color'>PORTFOLIO COMPONENT</h1>
      <div className='d-flex justify-content-center align-items-center pt-2  '>
        <div className='hr bg'></div>
        <i class="fa-solid fa-star mx-3 main-color"></i>
        <div className='hr bg '></div>
      </div>
      <div className='row g-5'>
        {images.map((img,index)=>
        <div className='col-md-4'>
        <div name={index} className=" pointer image position-relative overflow-hidden p-0 rounded-2 " onClick={()=>imgSrc(index)}>
          <img src={img}  className='w-100' alt="" />
          <div className="layer p-3 d-flex flex-column justify-content-center text-center">
            <i className="text-white fa-solid fa-plus fa-6x"></i>
          </div>
        </div>
      </div>
        )}
      </div>
    </div>
    <div id="boxContainer" className={boxContainerDisplay?'d-flex': 'd-none'} onClick={imgClose}>
        <div id="innerBox" class='innerBox' >
          <img src={images[currentIndex]}  className="w-100 rounded-2" alt="" />
        </div>
    </div>
  </div>
</>
}