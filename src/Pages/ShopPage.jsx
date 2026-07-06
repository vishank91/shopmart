import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Breadcrum from '../Components/Breadcrum'
import SaleBanner from '../Components/SaleBanner'

import { getMaincategory } from "../Redux/ActionCreators/MaincategoryActionCreators"
import { getSubcategory } from "../Redux/ActionCreators/SubcategoryActionCreators"
import { getBrand } from "../Redux/ActionCreators/BrandActionCreators"
import { getProduct } from "../Redux/ActionCreators/ProductActionCreators"
import SingleProduct from '../Components/SingleProduct'
import SingleProduct2 from '../Components/SingleProduct2'

const colors = ["Black", "White", "Blue", "Red", "Green", "Gray", "Pink", "Yellow", "Megenta", "Purple", "Orange", "N/A"]
const sizes = ["XXL", "XL", "L", "MD", "SM", "XS", "NB", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40", "N/A"]
export default function ShopPage() {
    let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
    let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
    let BrandStateData = useSelector(state => state.BrandStateData)
    let ProductStateData = useSelector(state => state.ProductStateData)

    let [page, setPage] = useState(1)
    let [startIndex, setStartIndex] = useState(0)
    let [endIndex, setEndIndex] = useState(0)
    let [totalProducts, setTotalProducts] = useState(0)

    let dispatch = useDispatch()

    useEffect(() => {
        (() => dispatch(getMaincategory()))()
    }, [MaincategoryStateData.length])

    useEffect(() => {
        (() => dispatch(getSubcategory()))()
    }, [SubcategoryStateData.length])

    useEffect(() => {
        (() => dispatch(getBrand()))()
    }, [BrandStateData.length])

    useEffect(() => {
        (() => {
            dispatch(getProduct())
            if (ProductStateData.length) {
                setTotalProducts(ProductStateData.filter(x => x.status).length)
            }
        })()
    }, [ProductStateData.length])

    useEffect(() => {
        setStartIndex((page - 1) * 24)
        setEndIndex((page - 1) * 24 + 24)
    }, [page])
    return (
        <>
            <Breadcrum title="Shop" />
            <div className="container-fluid shop py-5">
                <div className="container py-5">
                    <div className="row g-4">
                        <div className="col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="product-categories mb-2">
                                <h5>Maincategory</h5>
                                <ul className="list-unstyled">
                                    {MaincategoryStateData.filter(x => x.status).map((item, index) => {
                                        return <li key={index}>
                                            <div className="d-flex">
                                                <span className="btn btn-light w-100 text-start">{item.name}</span>
                                                <i className='bi bi-check'></i>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </div>
                            <div className="product-categories mb-2">
                                <h5>Subcategory</h5>
                                <ul className="list-unstyled">
                                    {SubcategoryStateData.filter(x => x.status).map((item, index) => {
                                        return <li key={index}>
                                            <div className="d-flex">
                                                <span className="btn btn-light w-100 text-start">{item.name}</span>
                                                <i className='bi bi-check'></i>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </div>
                            <div className="product-categories mb-2">
                                <h5>Brand</h5>
                                <ul className="list-unstyled">
                                    {BrandStateData.filter(x => x.status).map((item, index) => {
                                        return <li key={index}>
                                            <div className="d-flex">
                                                <span className="btn btn-light w-100 text-start">{item.name}</span>
                                                <i className='bi bi-check'></i>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </div>

                            <div className="product-color mb-3">
                                <h5>Select By Color</h5>
                                <ul className="list-unstyled">
                                    {colors.map((item, index) => {
                                        return <li key={index}>
                                            <div className="d-flex">
                                                <span className="btn btn-light w-100 text-start">{item}</span>
                                                <i className='bi bi-check'></i>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </div>
                            <div className="product-color mb-3">
                                <h5>Select By Size</h5>
                                <ul className="list-unstyled">
                                    {sizes.map((item, index) => {
                                        return <li key={index}>
                                            <div className="d-flex">
                                                <span className="btn btn-light w-100 text-start">{item}</span>
                                                <i className='bi bi-check'></i>
                                            </div>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-9 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="row g-4">
                                <div className="col-xl-6">
                                    <div className="input-group w-100 mx-auto d-flex">
                                        <input type="search" className="form-control p-3" placeholder="keywords"
                                            aria-describedby="search-icon-1" />
                                        <span id="search-icon-1" className="input-group-text p-3"><i
                                            className="fa fa-search"></i></span>
                                    </div>
                                </div>
                                <div className="col-xl-4 text-end">
                                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between">
                                        <label>Sort By:</label>
                                        <select id="electronics" name="electronicslist"
                                            className="border-0 form-select-sm bg-light me-3" form="electronicsform">
                                            <option value="volvo">No Sort</option>
                                            <option value="saab">Latest</option>
                                            <option value="audio">Price : Low to high</option>
                                            <option value="audi">Price : High to low</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-xl-2 d-flex justify-content-center align-items-center">
                                    <ul className="nav nav-pills d-inline-flex text-center py-2 px-2 rounded bg-light mb-4">
                                        <li className="nav-item me-4">
                                            <a className="bg-light" data-bs-toggle="pill" href="#tab-5">
                                                <i className="fas fa-th fs-2 text-primary"></i>
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="bg-light" data-bs-toggle="pill" href="#tab-6">
                                                <i className="fas fa-bars fs-2 text-primary"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div id="tab-5" className="tab-pane fade show p-0 active">
                                    <div className="row g-4 product">
                                        {ProductStateData.filter(x => x.status).slice(startIndex, endIndex).map(item => {
                                            return <SingleProduct title="shop" item={item} key={item.id} />
                                        })}
                                    </div>
                                </div>
                                <div id="tab-6" className="products tab-pane fade show p-0">
                                    <div className="row g-4 products-mini">
                                        {ProductStateData.filter(x => x.status).slice(startIndex, endIndex).map(item => {
                                            return <div className="col-lg-6" key={item.id}>
                                                <SingleProduct2 title="shop" item={item} />
                                            </div>
                                        })}
                                    </div>
                                </div>
                                <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="pagination d-flex justify-content-center mt-5">
                                        <a href="#" onClick={() => page > 1 ? setPage(page - 1) : null} className="rounded">&laquo;</a>
                                        {Array.from({ length: (totalProducts / 24) + 1 }, (p, index) => (
                                            <a href="#" key={index} onClick={() => setPage(index + 1)} className={`rounded ${page === (index + 1) ? 'active' : ''}`}>{index + 1}</a>
                                        ))}
                                        <a href="#" onClick={() => page < totalProducts ? setPage(page + 1) : null} className="rounded">&raquo;</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SaleBanner />
        </>
    )
}
