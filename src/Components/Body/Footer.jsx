import React from 'react'

const Footer = () => {
    return (
        <div>

            <section className="py-0 bg-secondary">
                <div className="bg-holder opacity-25" style={{ backgroundImage: 'url(assets/img/gallery/dot-bg.png)', backgroundPosition: 'top left', marginTop: '-3.125rem', backgroundSize: 'auto' }}>
                </div>
                <div className="container">
                    <div className="row py-8">
                        <div className="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0">
                            <p className="text-light my-4">The Pakistan most trusted <br />Event services  Recomended.</p>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-2 mb-3 order-2 order-sm-1">
                            <h5 className="lh-lg fw-bold mb-4 text-light font-sans-serif">Services</h5>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="lh-lg"><a className="footer-link" href="#!">Photography</a></li>
                                <li className="lh-lg"><a className="footer-link" href="#!">Food</a></li>
                                <li className="lh-lg"><a className="footer-link" href="#!">Meraige Hall</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
                            <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif">PartnerShips</h5>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="lh-lg"><a className="footer-link" href="#!">Jalal Sons</a></li>
                                <li className="lh-lg"><a className="footer-link" href="#!">Castilo</a></li>
                                <li className="lh-lg"><a className="footer-link" href="#!">Dhanak-Zafar-Sons</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
                            <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif">More info</h5>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="lh-lg"><a className="footer-link" href="#!">About Us</a></li>
                                <li className="lh-lg"><a className="footer-link" href="#!">Contact US</a></li>
                                <li className="lh-lg"><a className="footer-link" href="#!">Get Update</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="py-0 bg-primary">
                    <div className="container">
                        <div className="row justify-content-md-between justify-content-evenly py-4">
                            <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
                                <p className="fs--1 my-2 fw-bold text-200">All rights Reserved © Your Company, 2023</p>
                            </div>
                            <div className="col-12 col-sm-8 col-md-6">
                                <p className="fs--1 my-2 text-center text-md-end text-200"> Made with&nbsp;
                                    <svg className="bi bi-suit-heart-fill" xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="#F95C19" viewBox="0 0 16 16">
                                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z" />
                                    </svg>&nbsp;by&nbsp;<a className="fw-bold text-info" href="https://alphanitesofts.com/" target="_blank">Zahid/Ziyam khan </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </section>

        </div>
    )
}

export default Footer