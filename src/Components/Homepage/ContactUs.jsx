import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <section className="py-5" id='ContactUs'>
        <div className="container">
          <div className="row">
            <div className="col-12 py-3">
              <div className="bg-holder bg-size" style={{ backgroundImage: 'url(assets/img/gallery/people.png)', backgroundPosition: 'top center', backgroundSize: 'contain' }}>
              </div>
              <h1 className="text-center">Register Your service</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container">
          <div className="row">
            <div className="bg-holder bg-size" style={{ backgroundImage: 'url(assets/img/gallery/dot-bg.png)', backgroundPosition: 'bottom right', backgroundSize: 'auto' }}>
            </div>
            <div className="col-lg-6 z-index-2 mb-5"><img className=" rounded w-100" src="assets/img/gallery/appointment.jpg" alt="..." /></div>
            <div className="col-lg-6 z-index-2">
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="visually-hidden" htmlFor="inputName">Name</label>
                  <input className="form-control form-livedoc-control" id="inputName" type="text" placeholder="Name" />
                </div>
                <div className="col-md-6">
                  <label className="visually-hidden" htmlFor="inputPhone">Phone</label>
                  <input className="form-control form-livedoc-control" id="inputPhone" type="text" placeholder="Phone" />
                </div>
                <div className="col-md-6">
                  <label className="form-label visually-hidden" htmlFor="inputCategory">Category</label>
                  <select className="form-select" id="inputCategory">
                    <option selected="selected">Category</option>
                    <option> Category One</option>
                    <option> Category Two</option>
                    <option> Category Three</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label visually-hidden" htmlFor="inputEmail">Email</label>
                  <input className="form-control form-livedoc-control" id="inputEmail" type="email" placeholder="Email" />
                </div>
                <div className="col-md-12">
                  <label className="form-label visually-hidden" htmlFor="validationTextarea">Message</label>
                  <textarea className="form-control form-livedoc-control" id="validationTextarea" placeholder="Message" style={{ height: 250 }} required="required" defaultValue={""} />
                </div>
                <div className="col-12">
                  <div className="d-grid">
                    <button className="btn btn-primary rounded-pill" type="submit">Register</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ContactUs