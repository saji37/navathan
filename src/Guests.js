import React from 'react'
import './Guests.css'
function Guests() {
  return (
    <div className='container'>
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="2000">
      {/* <img src="..." className="d-block w-100" alt="..." /> */}
      <div className='card d-block w-100'>
        <h3>Dr. Vishnu Ganapathi Bhat</h3>
        <h6>Principal, Vivekananda Degree College Nehru Nagara Puttur</h6>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <div className='card d-block w-100'>erfvsdvsdv2</div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
    <div className='card d-block w-100'>erfvsdvsdv3</div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Guests
