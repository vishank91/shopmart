import React from 'react'
import { Link } from 'react-router-dom'

export default function SingleProduct({ item }) {
    return (
        <div className="col-md-6 col-lg-4 col-xl-3">
            <div className="product-item rounded wow fadeInUp" data-wow-delay="0.1s">
                <div className="product-item-inner border rounded">
                    <div className="product-item-inner-item">
                        <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic[0]}`} style={{ height: 400 }} className="img-fluid w-100 rounded-top" alt="" />
                        <div className="product-new">New</div>
                        <div className="product-details">
                            <Link to={`/product/${item.id}`}><i className="fa fa-eye fa-1x"></i></Link>
                        </div>
                    </div>
                    <div className="text-center rounded-bottom p-4">
                        <a href="#" className="d-block mb-2">{item.maincategory}/{item.subcategory}</a>
                        <a href="#" className="d-block h4">{item.name}</a>
                        <del className="me-2 fs-5">&#8377;{item.basePrice}</del>
                        <span className="text-primary fs-5">&#8377;{item.finalPrice}</span>
                    </div>
                </div>
                <div
                    className="product-item-add border border-top-0 rounded-bottom text-center p-4 pt-3">
                    <Link to={`/product/${item.id}`}
                        className="btn btn-primary border-secondary rounded-pill py-2 px-4 mb-4"><i
                            className="fas fa-shopping-cart me-2"></i> Add To Cart</Link>
                </div>
            </div>
        </div>
    )
}
