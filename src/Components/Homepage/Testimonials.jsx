import React from 'react'

const Testimonials = () => {
  return (
    <div>
          <section className="py-5" id='testimonials'>
      <div className="container">
        <div className="row">
          <div className="col-12 py-3">
            <div className="bg-holder bg-size" style={{backgroundImage: 'url(assets/img/gallery/people.png)', backgroundPosition: 'top center', backgroundSize: 'contain'}}>
            </div>
            <h1 className="text-center">PEOPLE WHO LOVE US</h1>
          </div>
        </div>
      </div>
    </section>
    <section className="py-8">
      <div className="bg-holder bg-size" style={{backgroundImage: 'url(assets/img/gallery/people-bg-1.png)', backgroundPosition: 'center', backgroundSize: 'cover'}}>
      </div>
      <div className="container">
        <div className="row align-items-center offset-sm-1">
          <div className="carousel slide" id="carouselPeople" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={10000}>
                <div className="row h-100">
                  <div className="col-sm-3 text-center">
                    <h5 className="mt-3 fw-medium text-secondary">Monis Rahman</h5>
                    <p className="fw-normal mb-0">Entrepreneur</p>
                  </div>
                  <div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                    <h2>Fantastic Response!</h2>
                    <div className="my-2"><i className="fas fa-star me-2" /><i className="fas fa-star me-2" /><i className="fas fa-star me-2" /><i className="fas fa-star-half-alt me-2" /><i className="far fa-star" /></div>
                    <p>This event services company stands out from the competition by offering cutting-edge event planning and management solutions. We provide a user-friendly mobile app and website that allow you to effortlessly schedule events, access virtual consultations, and collaborate with our experienced event planners every step of the way. All of our event services, from planning to execution, are guaranteed to be top-notch, professionally vetted, and proven. Our dedicated team at thier work takes pride in delivering exceptional event services. We highly recommend our event management and planning solutions."</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval={2000}>
                <div className="row h-100">
                  <div className="col-sm-3 text-center">
                    <h5 className="mt-3 fw-medium text-secondary">Farhan Saeed</h5>
                    <p className="fw-normal mb-0">Pakistani singer-songwriter</p>
                  </div>
                  <div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                    <h2>Fantastic Response!</h2>
                    <div className="my-2"><i className="fas fa-star me-2" /><i className="fas fa-star me-2" /><i className="fas fa-star me-2" /><i className="fas fa-star-half-alt me-2" /><i className="far fa-star" /></div>
                    <p>"Our event services company stands out by offering cutting-edge event solutions that are at the forefront of technology. We provide a user-friendly mobile app and website, making it effortless for you to schedule events, arrange online consultations, and collaborate with our skilled event professionals who will guide you through every aspect of your event planning journey. All of our event services, including planning, execution, and entertainment, are guaranteed to be of the highest quality, professionally validated, and proven. We have full confidence in our dedicated team at [Your Event Services Company Name] and highly recommend our event management solutions."</p>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="row h-100">
                  <div className="col-sm-3 text-center">
                    <h5 className="mt-3 fw-medium text-secondary">Mian Amer Mahmood,</h5>
                    <p className="fw-normal mb-0">Politician</p>
                  </div>
                  <div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                    <h2>Fantastic Response!</h2>
                    <div className="my-2"><i className="fas fa-star me-2" /><i className="fas fa-star me-2" /><i className="fas fa-star me-2" /><i className="fas fa-star-half-alt me-2" /><i className="far fa-star" /></div>
                    <p>Our event services stand out in the industry by offering cutting-edge technological solutions to ensure your events are memorable and hassle-free. We provide a user-friendly mobile app and website, allowing you to effortlessly schedule appointments, arrange online consultations, and connect with our experienced event planners who will guide you through every step of the process. Rest assured, all aspects of our services, from event design to execution, are meticulously crafted and 100% genuine, backed by our extensive experience and proven track record. We have a dedicated team of professionals who are committed to delivering outstanding results. We highly recommend our event services to make your special occasions truly remarkable</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="position-relative z-index-2 mt-5">
                <ol className="carousel-indicators">
                  <li className="active" data-bs-target="#carouselPeople" data-bs-slide-to={0} />
                  <li data-bs-target="#carouselPeople" data-bs-slide-to={1} />
                  <li data-bs-target="#carouselPeople" data-bs-slide-to={2}> </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </div>
  )
}

export default Testimonials