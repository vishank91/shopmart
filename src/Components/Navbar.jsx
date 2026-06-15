import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  let [settingData, setSettingData] = useState({
    siteName: import.meta.env.VITE_APP_SITE_NAME,
    address: import.meta.env.VITE_APP_ADDRESS,
    map1: import.meta.env.VITE_APP_MAP1,
    email: import.meta.env.VITE_APP_EMAIL,
    phone: import.meta.env.VITE_APP_PHONE,
    whatsapp: import.meta.env.VITE_APP_WHATSAPP,
    facebook: import.meta.env.VITE_APP_FAECBOOK,
    twitter: import.meta.env.VITE_APP_TWITTER,
    youtube: import.meta.env.VITE_APP_YOUTUBE,
    linkedin: import.meta.env.VITE_APP_LINKEDIN,
    instagram: import.meta.env.VITE_APP_INSTAGRAM,
  })
  return (
    <>
      <div className="container-fluid px-5 border-bottom">
        <div className="row gx-0 align-items-center">
          <div className="col-lg-7 col-4 text-center d-flex align-items-center justify-content-center">
            <a href={settingData.map1} target='_blank' className=" d-flex me-2">
              <i className='me-1 bi bi-geo-alt'></i>
              <span className='d-none d-xl-inline-block'>{settingData.address}</span>
            </a>
            <a href={`mailto:${settingData.email}`} target='_blank' className=" d-flex me-2">
              <i className='me-1 bi bi-envelope'></i>
              <span className='d-none d-xl-inline-block'>{settingData.email}</span>
            </a>
            <a href={`tel:${settingData.phone}`} target='_blank' className=" d-flex me-2">
              <i className='me-1 bi bi-telephone'></i>
              <span className='d-none d-xl-inline-block'>{settingData.phone}</span>
            </a>
            <a href={`https://wa.me/${settingData.whatsapp}`} target='_blank' className=" d-flex me-2">
              <i className='me-1 bi bi-whatsapp'></i>
              <span className='d-none d-xl-inline-block'>{settingData.whatsapp}</span>
            </a>
          </div>

          <div className="col-lg-5 col-8 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: "45px" }}>
              <a href={settingData.facebook} target='_blank' className=" me-2"> <i className='bi bi-facebook'></i></a>
              <a href={settingData.twitter} target='_blank' className=" me-2"> <i className='bi bi-twitter'></i></a>
              <a href={settingData.youtube} target='_blank' className=" me-2"> <i className='bi bi-youtube'></i></a>
              <a href={settingData.linkedin} target='_blank' className=" me-2"> <i className='bi bi-linkedin'></i></a>
              <a href={settingData.instagram} target='_blank' className=" me-2"> <i className='bi bi-instagram'></i></a>
              <div className="dropdown">
                <a href="#" className="dropdown-toggle  ms-2" data-bs-toggle="dropdown"><small><i
                  className="fa fa-home me-2"></i> Nitin Chauhan</small></a>
                <div className="dropdown-menu rounded">
                  <Link to="/profile?option=profile" className="dropdown-item"> Profile</Link>
                  <Link to="/profile?option=profile" className="dropdown-item"> Admin Dashboard</Link>
                  <Link to="/profile?option=wishlist" className="dropdown-item"> Wishlist</Link>
                  <Link to="/profile?option=orders" className="dropdown-item"> Orders</Link>
                  <Link to="/profile?option=address" className="dropdown-item"> Address</Link>
                  <Link to="/cart" className="dropdown-item"> Cart</Link>
                  <Link to="/checkout" className="dropdown-item"> Checkout</Link>
                  <button className="dropdown-item"> Log Out</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-5 py-4 d-none d-lg-block">
        <div className="row gx-0 align-items-center text-center">
          <div className="col-md-4 col-lg-3 text-center text-lg-start">
            <div className="d-inline-flex align-items-center">
              <Link to="/" className="navbar-brand p-0">
                <h1 className="display-5 text-primary m-0"><i
                  className="bi bi-bag-check me-2"></i>{settingData.siteName}</h1>
              </Link>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 text-center">
            <div className="position-relative ps-4">
              <div className="d-flex border rounded-pill">
                <input className="form-control border-primary outline-primary w-100 py-3" style={{borderRadius:"30px 0 0 30px"}} type="text"
                  data-bs-target="#dropdownToggle123" placeholder="Search Looking For?" />
                <button type="button" className="btn btn-primary py-3 px-5"  style={{borderRadius:"0 30px 30px 0"}} ><i
                  className="fas fa-search"></i></button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 text-center text-lg-end">
            <div className="d-inline-flex align-items-center">
              <Link to="/profile?option=wishlist" className=" d-flex align-items-center justify-content-center me-3"><span
                className=""><i className="me-1 fas fa-heart"></i> Wishlist</span></Link>
              <Link to="/cart" className=" d-flex align-items-center justify-content-center"><span
                className=""><i className="me-1 fas fa-shopping-cart"></i> Cart</span></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid nav-bar p-0">
        <div className="row gx-0 bg-primary px-5 align-items-center">
          <div className="col-lg-3 d-none d-lg-block">
            <nav className="navbar navbar-light position-relative" style={{ width: "250px" }}>
              <button className="navbar-toggler border-0 fs-4 w-100 px-0 text-start" type="button"
                data-bs-toggle="collapse" data-bs-target="#allCat">
                <h4 className="m-0 text-light"><i className="fa fa-bars me-2"></i>Categories</h4>
              </button>
              <div className="collapse navbar-collapse rounded-bottom" id="allCat">
                <div className="navbar-nav ms-auto py-0">
                  <ul className="list-unstyled categories-bars">
                    <li>
                      <div className="categories-bars-item">
                        <a href="#">Accessories</a>
                        <span>(3)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-bars-item">
                        <a href="#">Electronics & Computer</a>
                        <span>(5)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-bars-item">
                        <a href="#">Laptops & Desktops</a>
                        <span>(2)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-bars-item">
                        <a href="#">Mobiles & Tablets</a>
                        <span>(8)</span>
                      </div>
                    </li>
                    <li>
                      <div className="categories-bars-item">
                        <a href="#">SmartPhone & Smart TV</a>
                        <span>(5)</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="col-12 col-lg-9">
            <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
              <Link to="/" className="navbar-brand d-block d-lg-none">
                <h1 className="display-5 text-light m-0"><i
                  className="bi bi-bag-check text-white me-2"></i>{settingData.siteName}</h1>
              </Link>
              <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse">
                <span className="fa fa-bars fa-1x"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto py-0">
                  <a href="index.html" className="nav-item nav-link text-light">Home</a>
                  <a href="single.html" className="nav-item nav-link text-light">About</a>
                  <a href="shop.html" className="nav-item nav-link text-light">Shop</a>
                  <a href="shop.html" className="nav-item nav-link text-light">Feature</a>
                  <a href="shop.html" className="nav-item nav-link text-light">Faq</a>
                  <a href="shop.html" className="nav-item nav-link text-light">Testimonial</a>
                  <a href="shop.html" className="nav-item nav-link text-light">Contact Us</a>
                  {/* <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                      <a href="bestseller.html" className="dropdown-item">Bestseller</a>
                      <a href="cart.html" className="dropdown-item">Cart Page</a>
                      <a href="cheackout.html" className="dropdown-item">Cheackout</a>
                      <a href="404.html" className="dropdown-item">404 Page</a>
                    </div>
                  </div> */}
                  <div className="nav-item dropdown d-block d-lg-none mb-3">
                    <a href="#" className="nav-link  text-light dropdown-toggle" data-bs-toggle="dropdown">Category</a>
                    <div className="dropdown-menu m-0">
                      <ul className="list-unstyled categories-bars">
                        <li>
                          <div className="categories-bars-item">
                            <a href="#">Accessories</a>
                            <span>(3)</span>
                          </div>
                        </li>
                        <li>
                          <div className="categories-bars-item">
                            <a href="#">Electronics & Computer</a>
                            <span>(5)</span>
                          </div>
                        </li>
                        <li>
                          <div className="categories-bars-item">
                            <a href="#">Laptops & Desktops</a>
                            <span>(2)</span>
                          </div>
                        </li>
                        <li>
                          <div className="categories-bars-item">
                            <a href="#">Mobiles & Tablets</a>
                            <span>(8)</span>
                          </div>
                        </li>
                        <li>
                          <div className="categories-bars-item">
                            <a href="#">SmartPhone & Smart TV</a>
                            <span>(5)</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}
