import React from 'react'
import { useState } from 'react'


export default function Contact() {
  let [classNameStyle,setClassNameStyle]=useState(false)
  let [classAgeStyle,setClassAgeStyle]=useState(false)
  let [classEmailStyle,setClassEmailStyle]=useState(false)
  let [classPassStyle,setClassPassStyle]=useState(false)
  let handleInputNameChange=(e)=> {
    if(e.target.value===""){
      setClassNameStyle(false);
    }else{
      setClassNameStyle(true);
    }
  };
  let handleInputAgeChange=(e)=> {
    if(e.target.value===""){
      setClassAgeStyle(false);
    }else{
      setClassAgeStyle(true);
    }
  };
  let handleInputEmailChange=(e)=> {
    if(e.target.value===""){
      setClassEmailStyle(false);
    }else{
      setClassEmailStyle(true);
    }
  };
  let handleInputPassChange=(e)=> {
    if(e.target.value===""){
      setClassPassStyle(false);
    }else{
      setClassPassStyle(true);
    }
  };
  
  return <>
    <div>
      <div className='text-center py-5'>
      <h1 className='p-4 mt-5 main-color'>CONATCT SECTION</h1>
        <div className='d-flex justify-content-center align-items-center py-2 mb-5 '>
          <div className='hr bg'></div>
          <i class="fa-solid fa-star mx-3 main-color"></i>
          <div className='hr bg '></div>
        </div>
        <div >
          <form action="">
            <div className='d-flex  flex-column w-50 mx-auto position-relative pt-5 overflow-hidden'> 
              <label htmlFor="" className={classNameStyle?'secondry-color text-start  lable show ':'secondry-color text-start lable'}>userName :</label>
              <input type="text"  className=' form-control w-100 border-0 border-bottom z-3' placeholder='userName'  onKeyUp={handleInputNameChange} />
            </div>
            <div className='d-flex  flex-column w-50 mx-auto position-relative pt-5 overflow-hidden'> 
              <label htmlFor="" className={classAgeStyle?'secondry-color text-start  lable show ':'secondry-color text-start lable'}>userAdge :</label>
              <input type="number" className=' form-control w-100 border-0 border-bottom z-3'placeholder='userAdge' onKeyUp={handleInputAgeChange} />
            </div>
            <div className='d-flex  flex-column w-50 mx-auto position-relative pt-5 overflow-hidden'> 
              <label htmlFor="" className={classEmailStyle?'secondry-color text-start  lable show ':'secondry-color text-start lable'}>userEmail :</label>
              <input type="email" className=' form-control w-100 border-0 border-bottom z-3'placeholder='userEmail' onKeyUp={handleInputEmailChange} />
            </div>
            <div className='d-flex  flex-column w-50 mx-auto position-relative pt-5 overflow-hidden'> 
              <label htmlFor="" className={classPassStyle?'secondry-color text-start  lable show ':'secondry-color text-start lable'}>userPassword :</label>
              <input type="password"  className=' form-control w-100 border-0 border-bottom z-3'placeholder='userPassword' onKeyUp={handleInputPassChange} />
            </div>
          </form>
        </div>
      </div>
    </div>
  </>
}
