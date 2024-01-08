import React from 'react'
import { TbPhoneCall } from "react-icons/tb";
import { IoMailOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

const header = () => {
  return <>
  <header className='header-top-strip p-3'>
    <div className="container-xxl">
        <div className="row">
            <div className="col-6">
                <p>The trending outfits at 100% off</p>
            </div>
            <div className="col-6 d-flex justify-content-between">
                <a href="tel:+25412345678">Call Us +25412345678</a>
            </div>
            <div>
            <Link><TbPhoneCall className='fs-3 mx-4' /></Link>
            <Link><IoMailOutline className='fs-3 mx-4' /></Link>
            </div>
        </div>
    </div>
  </header>
  </>;
}

export default header
