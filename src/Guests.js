import React from 'react'
import './Guests.css'
function Guests() {
  return (
    <div className='container'>
      <div id="carouselExampleInterval" className="carousel slide"  data-mdb-ride="carousel" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="3000">
      {/* <img src="..." className="d-block w-100" alt="..." /> */}
      <div className='card d-block w-100'>
        <h3 id='guest'><b>Prof. Vishnu Ganapathi Bhat</b></h3><br/>
        <h6 id='desg'><b>Principal, Vivekananda College of arts,science and commerce Puttur</b></h6>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
    <div className='card d-block w-100' >
        <h3 id='guest'><b>Sri P Prakash Kumar</b></h3><br/>
        <h6 id='desg'><b>HOD, Department of Computer Science, Vivekananda College of arts,science and commerce Puttur</b></h6>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
    <div className='card d-block w-100' >
        <h3 id='guest'><b>Sri Ravikrishna D Kallaje</b></h3><br/>
        <h6 id='desg'><b>Director, VCET Governing Council Puttur</b></h6>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
    <div className='card d-block w-100'>
        <h3 id='guest'><b>Dr. Mahesh Prasanna K</b></h3><br/>
        <h6 id='desg'><b>Principal, VCET Puttur</b></h6>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
    <div className='card d-block w-100'>
        <h3 id='guest'><b>Dr. Vandana B S</b></h3><br/>
        <h6 id='desg'><b>Director,Department of MCA, VCET Puttur</b></h6>
      </div>
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
