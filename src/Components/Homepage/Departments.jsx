import React from 'react'

const Departments = () => {
    return (
        <div>
            <section className="py-5" id="Services">
                <div className="container">
                    <div className="row">
                        <div className="col-12 py-3">
                            <div className="bg-holder bg-size" style={{ backgroundImage: 'url(assets/img/gallery/bg-departments.png)', backgroundPosition: 'top center', backgroundSize: 'contain' }}>
                            </div>
                            <h1 className="text-center">OUR services</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-0">
                <div className="container">
                    <div className="row py-5 align-items-center justify-content-center justify-content-lg-evenly">
                        <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                            <div className="d-flex flex-column align-items-center">
                                <div className="icon-box text-center"><a className="text-decoration-none" href="#!"><img className="mb-3 deparment-icon" style={{width:"150px", height:"100px"}} src="assets/img/icons/wedings.jpg" alt="..." /><img className="mb-3 deparment-icon-hover" src="assets/img/icons/neurology.svg" alt="..." />
                                    <p className="fs-1 fs-xxl-2 text-center">Weddings</p>
                                </a></div>
                            </div>
                        </div>
                        <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                            <div className="d-flex flex-column align-items-center">
                                <div className="icon-box text-center"><a className="text-decoration-none" href="#!"><img className="mb-3 deparment-icon" style={{width:"150px", height:"100px"}} src="assets/img/icons/events.jpg" alt="..." /><img className="mb-3 deparment-icon-hover" src="assets/img/icons/eye-care.svg" alt="..." />
                                    <p className="fs-1 fs-xxl-2 text-center">Parties</p>
                                </a></div>
                            </div>
                        </div>
                        <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                            <div className="d-flex flex-column align-items-center">
                                <div className="icon-box text-center"><a className="text-decoration-none" href="#!"><img className="mb-3 deparment-icon" style={{width:"150px", height:"100px"}} src="assets/img/icons/birthday.jpg" alt="..." /><img className="mb-3 deparment-icon-hover" src="assets/img/icons/cardiac.svg" alt="..." />
                                    <p className="fs-1 fs-xxl-2 text-center">Birthday</p>
                                </a></div>
                            </div>
                        </div>
                        <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                            <div className="d-flex flex-column align-items-center">
                                <div className="icon-box text-center"><a className="text-decoration-none" href="#!"><img className="mb-3 deparment-icon" style={{width:"150px", height:"100px"}} src="assets/img/icons/concerts1.jpg" alt="..." /><img className="mb-3 deparment-icon-hover" src="assets/img/icons/heart.svg" alt="..." />
                                    <p className="fs-1 fs-xxl-2 text-center">Concerts</p>
                                </a></div>
                            </div>
                        </div>
                        <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                            <div className="d-flex flex-column align-items-center">
                                <div className="icon-box text-center"><a className="text-decoration-none" href="#!"><img className="mb-3 deparment-icon" style={{width:"150px", height:"100px"}} src="assets/img/icons/decoration.jpg" alt="..." /><img className="mb-3 deparment-icon-hover" src="assets/img/icons/osteoporosis.svg" alt="..." />
                                    <p className="fs-1 fs-xxl-2 text-center">Decoration</p>
                                </a></div>
                            </div>
                        </div>
                        <div className="col-auto col-md-4 col-lg-auto text-xl-start">
                            <div className="d-flex flex-column align-items-center">
                                <div className="icon-box text-center"><a className="text-decoration-none" href="#!"><img className="mb-3 deparment-icon" style={{width:"150px", height:"100px"}} src="assets/img/icons/Food.jpg" alt="..." /><img className="mb-3 deparment-icon-hover" src="assets/img/icons/ent.svg" alt="..." />
                                    <p className="fs-1 fs-xxl-2 text-center">Food</p>
                                </a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Departments