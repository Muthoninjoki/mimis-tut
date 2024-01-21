import React from 'react'

const footer = () => {
  return <>
  <footer classname='footer px-5'>
    <div className="container-xxl">
      <div className="row">
        <div className="col-4 d-flex flex-column">
          <h3 className='mb-5'>Contact Us</h3>
          <div className="footer-details">
            <p className='mb-3'><b>Address:</b> Milele Center 1st floor, Kitengela</p>
            <p className='mb-3'><b>Phone:</b> <a href="tel:+25412345678">Call Us +25412345678</a></p>
            <p className='mb-5'><b>Hours Open</b> We are open from 8:30am - 5:00pm</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </>
}

export default footer
