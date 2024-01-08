import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { AioutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const header = () => {
  return <>
  <header className='header-top-strip p-1 shadow-sm'>
    <div className="container-xxl">
        <div className="row align-items-center">
            <div className="col-6">
                <p>The trending outfits at 100% off</p>
            </div>
            <div className="col-6 d-flex justify-content-between">
                <a href="tel:+25412345678">Call Us +25412345678</a>
            </div>
            <div>
            <Link><BiPhoneCall className='fs-3 mx-4'/></Link>
            <Link><AioutlineMail className='fs-3 mx-4'/></Link>
            </div>
        </div>
    </div>
  </header>
  </>;
}

export default header
