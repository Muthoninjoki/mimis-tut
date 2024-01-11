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
  <header className='header-upper'>
    <div className='cointainer-xxl'>
      <div className='row'>
        <div className="col-2">
        </div>
        <div className="col-3">
        <div className="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">All</span>
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <button className="input-group-text" id="basic-addon2">Search</button>
      </div>
        </div>
      </div>
      <div className="col-5 d-flex align-items-center justify-content-between">
        <Link to={'/'}>Home</Link>
        <Link to={'shop'}>Shop</Link>
        <Link to={'blog'}>Blog</Link>
        <Link to={'about'}>About</Link>
        <Link to={'contact'}>Contact</Link>
      </div>

    </div>

  </header>
  </>;
}

export default header
