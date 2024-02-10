import React from 'react'
export default function Footer() {
    return <>
        <div className='text-center text-white w-100'>
        <div className='row footer'>
            <div className='col-md-4 p-5'>
                <h6 className='h3 fw-bold'>LOCATION </h6>
                <p>2215 John Daniel Drive</p>
                <p>Clark, MO 65243</p>
            </div>
            <div className='col-md-4 p-5'>
                <h6 className='h3 fw-bold'>AROUND THE WEB </h6>
                <i class="fa-brands fa-facebook border border-1 rounded-5 p-2 mx-1"></i>
                <i class="fa-brands fa-twitter border border-1 rounded-5 p-2 mx-1"></i>
                <i class="fa-brands fa-linkedin-in border border-1 rounded-5 p-2 mx-1"></i>
                <i class="fa-solid fa-globe border border-1 rounded-5 p-2 mx-1"></i>
            </div>
            <div className='col-md-4 p-5'>
                <h6 className='h3 fw-bold'>ABOUT FREELANCER</h6>
                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
        <div className='bg-dark p-2'>
            <p>Copyright © Your Website 2021</p>
        </div>
        </div>
    </>
}
