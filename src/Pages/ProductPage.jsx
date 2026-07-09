import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import Breadcrum from '../Components/Breadcrum'
import ProductSlider from '../Components/ProductSlider'

import { getProduct } from "../Redux/ActionCreators/ProductActionCreators"

const sliderOptions = {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    loop: true,
    pagination: true,
    modules: [EffectCube, Pagination],
    className: "mySwiper"
}
export default function ProductPage() {
    let { id } = useParams()

    let [selected, setSelected] = useState({
        color: "",
        size: "",
        quantity: 1
    })
    let [data, setData] = useState({
        pic: [],
        color: [],
        size: []
    })
    let [relatedProducts, setRelatedProducts] = useState([])

    let ProductStateData = useSelector(state => state.ProductStateData)
    let dispatch = useDispatch()

    useEffect(() => {
        (() => {
            dispatch(getProduct())
        })()
    }, [ProductStateData.length])

    useEffect(() => {
        (() => {
            if (ProductStateData.length) {
                let item = ProductStateData.find(x => x.id === id)
                if (item) {
                    setData({ ...item })
                    setSelected({ ...selected, color: item.color[0], size: item.size[0] })
                    setRelatedProducts(ProductStateData.filter(x => x.maincategory === item.maincategory))
                }
                else
                    window.history.back()
            }
        })()
    }, [ProductStateData.length, id])
    return (
        <>
            <Breadcrum title={data.name ? data.name : "Product"} />
            <div className="container-fluid shop py-5">
                <div className="container py-5">
                    <div className="g-4">
                        <div className="wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row g-4 single-product">
                                <div className="col-xl-6">
                                    <Swiper {...sliderOptions}>
                                        {data.pic.map((item, index) => {
                                            return <SwiperSlide key={index}>
                                                <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item}`} height={400} className='w-100' />
                                            </SwiperSlide>
                                        })}
                                    </Swiper>
                                </div>
                                <div className="col-xl-6">
                                    <h4 className="fw-bold mb-3">{data.name}</h4>
                                    <p className="mb-3">Category: {data.maincategory}/{data.subcategory}/{data.brand}</p>
                                    <h5 className="fw-bold mb-3"><del>&#8377;{data.basePrice}</del> &#8377;{data.finalPrice} <sup>{data.discount}% Off</sup></h5>
                                    {/* <div className="d-flex mb-4">
                                        <i className="fa fa-star text-secondary"></i>
                                        <i className="fa fa-star text-secondary"></i>
                                        <i className="fa fa-star text-secondary"></i>
                                        <i className="fa fa-star text-secondary"></i>
                                        <i className="fa fa-star"></i>
                                    </div> */}
                                    {/* <div className="mb-3">
                                        <div className="btn btn-primary d-inline-block rounded text-white py-1 px-4 me-2"><i
                                            className="fab fa-facebook-f me-1"></i> Share</div>
                                        <div className="btn btn-secondary d-inline-block rounded text-white py-1 px-4 ms-2"><i
                                            className="fab fa-twitter ms-1"></i> Share</div>
                                    </div>
                                    <div className="d-flex flex-column mb-3">
                                        <small>Product SKU: N/A</small>
                                        <small>Available: <strong className="text-primary">20 items in stock</strong></small>
                                    </div> */}
                                    <p className="mb-4">{data.stock ? `${data.stockQuantity} Left In Stock` : 'Out Of Stock'}</p>
                                    <div className='d-flex align-items-center mb-4'>
                                        <h5>Color : </h5>
                                        <div className='ms-4 btn-group'>
                                            {data.color.map((item, index) => {
                                                return <button
                                                    key={index}
                                                    onClick={() => setSelected({ ...selected, color: item })}
                                                    className={`btn ${selected.color === item ? 'btn-primary' : 'btn-light'} border border-primary`}>{item}</button>
                                            })}
                                        </div>
                                    </div>
                                    <div className='d-flex align-items-center mb-4'>
                                        <h5>Size : </h5>
                                        <div className='ms-4 btn-group'>
                                            {data.size.map((item, index) => {
                                                return <button
                                                    key={index}
                                                    onClick={() => setSelected({ ...selected, size: item })}
                                                    className={`btn ${selected.size === item ? 'btn-primary' : 'btn-light'} border border-primary`}>{item}</button>
                                            })}
                                        </div>
                                    </div>
                                    <div className="input-group quantity mb-3" style={{ width: "100px" }}>
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-minus rounded-circle bg-light border" onClick={() => selected.quantity > 1 ? setSelected({ ...selected, quantity: selected.quantity - 1 }) : null}>
                                                <i className="fa fa-minus"></i>
                                            </button>
                                        </div>
                                        <input type="text" className="form-control form-control-sm text-center border-0" value={selected.quantity} />
                                        <div className="input-group-btn">
                                            <button className="btn btn-sm btn-plus rounded-circle bg-light border" onClick={() => selected.quantity < data.stockQuantity ? setSelected({ ...selected, quantity: selected.quantity + 1 }) : null}>
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div className='btn-group'>
                                        <button className="btn btn-primary border px-4 py-2 mb-4 text-primary">
                                            <i className="bi bi-cart-plus fs-5 me-2 text-white"></i> Add to cart
                                        </button>
                                        <button className="btn btn-success border px-4 py-2 mb-4 text-light">
                                            <i className="bi bi-heart fs-5 me-2 text-white"></i> Add to Wishlist
                                        </button>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <nav>
                                        <div className="nav nav-tabs mb-3">
                                            <button className="nav-link active border-white border-bottom-0" type="button"
                                                role="tab" id="nav-about-tab" data-bs-toggle="tab" data-bs-target="#nav-about"
                                                aria-controls="nav-about" aria-selected="true">Description</button>
                                            <button className="nav-link border-white border-bottom-0" type="button" role="tab"
                                                id="nav-mission-tab" data-bs-toggle="tab" data-bs-target="#nav-mission"
                                                aria-controls="nav-mission" aria-selected="false">Reviews</button>
                                        </div>
                                    </nav>
                                    <div className="tab-content mb-5">
                                        <div className="tab-pane active" id="nav-about" role="tabpanel"
                                            aria-labelledby="nav-about-tab">
                                            <div dangerouslySetInnerHTML={{ __html: data.description }} />
                                        </div>
                                        <div className="tab-pane" id="nav-mission" role="tabpanel"
                                            aria-labelledby="nav-mission-tab">
                                            <div className="d-flex">
                                                <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3"
                                                    style={{ width: "100px", height: "100px" }} alt="" />
                                                <div className="">
                                                    <p className="mb-2" style={{ fontSize: "14px" }}>April 12, 2024</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5>Jason Smith</h5>
                                                        <div className="d-flex mb-3">
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p>The generated Lorem Ipsum is therefore always free from repetition
                                                        injected humour, or non-characteristic
                                                        words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <img src="img/avatar.jpg" className="img-fluid rounded-circle p-3"
                                                    style={{ width: "100px", height: "100px" }} alt="" />
                                                <div className="">
                                                    <p className="mb-2" style={{ fontSize: "14px" }}>April 12, 2024</p>
                                                    <div className="d-flex justify-content-between">
                                                        <h5>Sam Peters</h5>
                                                        <div className="d-flex mb-3">
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star text-secondary"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div>
                                                    </div>
                                                    <p className="text-dark">The generated Lorem Ipsum is therefore always free from
                                                        repetition injected humour, or non-characteristic
                                                        words etc. Susp endisse ultricies nisi vel quam suscipit </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="nav-vision" role="tabpanel">
                                            <p className="text-dark">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et
                                                tempor sit. Aliqu diam
                                                amet diam et eos labore. 3</p>
                                            <p className="mb-0">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos
                                                labore.
                                                Clita erat ipsum et lorem et sit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductSlider data={relatedProducts} title="Related Products" />
        </>
    )
}
