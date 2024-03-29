import React from 'react'
import { BiPhoneCall } from 'react-icons/bi'
import { AioutlineMail } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { RiInboxArchiveFill } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { LuShoppingCart } from "react-icons/lu";

const header = () => {
  return <>
  <header className='header-top-strip p-1 px-4 shadow-sm'>
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
        <div className="col-2 text-center">
        </div>
        <div className="col-3 d-flex align-items-center mt-3">
        <div className="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">All</span>
        <input type="text" className="form-control p-2" placeholder="Search Items" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        <button className="input-group-text" id="basic-addon2">Search</button>
      </div>
        </div>
      </div>
      <div className="nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto">
        <Link to={'/'}>Home</Link>
        <Link to={'shop'}>Shop</Link>
        <Link to={'blog'}>Blog</Link>
        <Link to={'about'}>About</Link>
        <Link to={'contact'}>Contact</Link>
      </div>
      <div className="nav-links-nav col-3 d-flex align-items-center justify-content-around">
        <Link to={'wishlist'} className='d-flex ' > <RiInboxArchiveFill className='fs-3 mx-2' />
        <span>Wishlist</span>
        </Link>
        <Link to={'login'} className='d-flex'> <VscAccount className='fs-3 mx-2'/>
        <span>Account</span>
        </Link>
        <Link to={'cart'} className='d-flex'> <LuShoppingCart className='fs-3 mx-2'/>
        <span>Cart</span>
        </Link>
      </div>
    </div>

  </header>
  </>;
}

export default header
