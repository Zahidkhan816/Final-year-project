import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <section className="pb-0" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3">
              <div className="bg-holder bg-size" style={{ backgroundImage: 'url(assets/img/gallery/about-us.png)', backgroundPosition: 'top center', backgroundSize: 'contain' }}>
              </div>
              <h1 className="text-center">ABOUT US</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="bg-holder bg-size" style={{ backgroundImage: 'url(assets/img/gallery/about-bg.png)', backgroundPosition: 'top center', backgroundSize: 'contain' }}>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-lg-1 mb-5 mb-lg-0"><img className="fit-cover rounded w-100" src="assets/img/gallery/health-care.jpg" alt="..." /></div>
            <div className="col-md-6 text-center text-md-start">
              <h2 className="fw-bold mb-4">"We're dedicated to enhancing your events." <br className="d-none d-sm-block" />"Creating a remarkable event system around you."</h2>
              <p>"We believe that everyone should have convenient access to exceptional event services. Our mission is to streamline the process for our clients, providing top-notch event solutions whether in person or at their convenience." <br className="d-none d-sm-block" /> Our mission is to streamline the process for our clients, providing top-notch event solutions whether in person or at their convenience."<br className="d-none d-sm-block" />possible for our patients and to offer treatment no matter<br className="d-none d-sm-block" />where they are — in person or at their convenience. </p>
              <div className="py-3">
                <button className="btn btn-lg btn-outline-primary rounded-pill" href="#testimonials">Learn more </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default AboutUs