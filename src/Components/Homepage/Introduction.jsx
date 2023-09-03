import React from 'react'

const Introduction = () => {
  return (
    <div>

<section className="bg-secondary" >
      <div className="bg-holder" style={{backgroundImage: 'url(assets/img/gallery/bg-eye-care.png)', backgroundPosition: 'center', backgroundSize: 'contain'}}>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 col-xxl-6"><img className="img-fluid" src="assets/img/gallery/eye-care.jpg" alt="..." /></div>
          <div className="col-md-7 col-xxl-6 text-center text-md-start">
            <h2 className="fw-bold text-light mb-4 mt-4 mt-lg-0">"Expert Event Services with Industry-Leading Professionals"<br className="d-none d-sm-block" />Industry-Leading Professionals</h2>
            <p className="text-light">"We've developed an event services system that prioritizes your needs. <br className="d-none d-sm-block" />Your well-being and the success of your events are <br className="d-none d-sm-block" />our utmost priorities."</p>
            <div className="py-3"><a className="btn btn-lg btn-light rounded-pill" href="#about" role="button">Learn more </a></div>
          </div>
        </div>
      </div>
    </section>
    
    </div>
  )
}

export default Introduction