import React from 'react'
import Breadcrum from '../Components/Breadcrum'
import ContactDetails from '../Components/ContactDetails'

export default function ContactUsPage() {
    return (
        <>
            <Breadcrum title="Contact Us" />
            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="p-5 bg-light rounded">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "900px" }}>
                                    <h4 className="text-primary border-bottom border-primary border-2 d-inline-block pb-2">Get in
                                        touch</h4>
                                    <p className="mb-5 fs-5 text-dark">We are here for you! how can we help, We are here for you!
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <h5 className="text-primary wow fadeInUp" data-wow-delay="0.1s">Let’s Connect</h5>
                                <h1 className="display-5 mb-4 wow fadeInUp" data-wow-delay="0.3s">Send Your Message</h1>
                                <p className="mb-4 wow fadeInUp" data-wow-delay="0.5s">The contact form is currently inactive. Get a
                                    functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste
                                    the files, add a little code and you're done. <a
                                        href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                                <form>
                                    <div className="row g-4 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                                <label for="name">Your Name</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                                <label for="email">Your Email</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input type="phone" className="form-control" id="phone" placeholder="Phone" />
                                                <label for="phone">Your Phone</label>
                                            </div>
                                        </div>
                                        <div className="col-lg-12 col-xl-6">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="project" placeholder="Project" />
                                                <label for="project">Your Project</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                                <label for="subject">Subject</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <textarea className="form-control" placeholder="Leave a message here" id="message"
                                                    style={{ height: "160px" }}></textarea>
                                                <label for="message">Message</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3">Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.2s">
                                <div className="h-100 rounded">
                                    <iframe className="rounded w-100" style={{ height: "100%" }}
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd"
                                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <ContactDetails/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
