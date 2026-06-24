import React, { useEffect, useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Breadcrum from '../../../Components/Breadcrum'
import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import TextValidators from '../../../FormValidators/TextValidators'
import ImageValidators from '../../../FormValidators/ImageValidators'

let rte;
import { createProduct } from '../../../Redux/ActionCreators/ProductActionCreators'
import { getMaincategory } from '../../../Redux/ActionCreators/MaincategoryActionCreators'
import { getSubcategory } from '../../../Redux/ActionCreators/SubcategoryActionCreators'
import { getBrand } from '../../../Redux/ActionCreators/BrandActionCreators'
export default function AdminProductCreatePage() {
    let refdiv = useRef(null);
    let [data, setData] = useState({
        name: "",
        maincategory: "",
        subcategory: "",
        brand: "",
        color: [],
        size: [],
        basePrice: 0,
        discount: 0,
        finalPrice: 0,
        stock: true,
        stockQuantity: 0,
        pic: "",
        status: true
    })
    let [errorMessage, setErrorMessage] = useState({
        name: "Name Field is Mendatory",
        basePrice: "Base Price Field is Mendatory",
        discount: "Discount Field is Mendatory",
        stockQuantity: "Stock Quantity Field is Mendatory",
        color: "Please Select Atleast on Color",
        size: "Please Select Atleast on Size",
        pic: 'Pic Field is Mendatory'
    })
    let [show, setShow] = useState(false)

    let MaincategoryStateData = useSelector(state => state.MaincategoryStateData)
    let SubcategoryStateData = useSelector(state => state.SubcategoryStateData)
    let BrandStateData = useSelector(state => state.BrandStateData)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    function getInputData(e) {
        let name = e.target.name
        let value = name === "pic" ? "product/" + e.target.files[0].name : e.target.value
        // let value = name === "pic" ? e.target.files[0]: e.target.value

        setData({ ...data, [name]: name === "status" ? value === "1" ? true : false : value })
        setErrorMessage({ ...errorMessage, [name]: name === "pic" ? ImageValidators(e) : TextValidators(e) })
    }
    function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error)
            setShow(true)
        else {
            dispatch(createProduct({ ...data }))

            // let formData = new FormData()
            // formData.append("name",data.name)
            // formData.append("pic",data.pic)
            // formData.append("status",data.status)
            // dispatch(createProduct(formData))

            navigate("/admin/product")
        }
    }

    useEffect(() => {
        dispatch(getMaincategory())
    }, [MaincategoryStateData.length])

    useEffect(() => {
        dispatch(getSubcategory())
    }, [SubcategoryStateData.length])

    useEffect(() => {
        dispatch(getBrand())
    }, [BrandStateData.length])

    useEffect(() => {
        rte = new window.RichTextEditor(refdiv.current);
        rte.setHTMLCode("");
    }, [])
    return (
        <>
            <Breadcrum title="Admin" />
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2'>Create Product <Link to="/admin/product"><i className='bi bi-arrow-left text-light float-end'></i></Link></h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label>Name*</label>
                                    <input type="text" name="name" onChange={getInputData} placeholder='Product Name' className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}
                                </div>

                                <div className="col-xl-3 col-md-6 mb-3">
                                    <label>Maincategory*</label>
                                    <select name="maincategory" onChange={getInputData} className='form-select border-primary'>
                                        {MaincategoryStateData.filter(x => x.status).map((item) => {
                                            return <option key={item.id}>{item.name}</option>
                                            // return <option key={item.id} value={item.id}>{item.name}</option>
                                        })}
                                    </select>
                                </div>

                                <div className="col-xl-3 col-md-6 mb-3">
                                    <label>Subcategory*</label>
                                    <select name="subcategory" onChange={getInputData} className='form-select border-primary'>
                                        {SubcategoryStateData.filter(x => x.status).map((item) => {
                                            return <option key={item.id}>{item.name}</option>
                                            // return <option key={item.id} value={item.id}>{item.name}</option>
                                        })}
                                    </select>
                                </div>

                                <div className="col-xl-3 col-md-6 mb-3">
                                    <label>Brand*</label>
                                    <select name="brand" onChange={getInputData} className='form-select border-primary'>
                                        {BrandStateData.filter(x => x.status).map((item) => {
                                            return <option key={item.id}>{item.name}</option>
                                            // return <option key={item.id} value={item.id}>{item.name}</option>
                                        })}
                                    </select>
                                </div>

                                <div className="col-xl-3 col-md-6 mb-3">
                                    <label>Stock*</label>
                                    <select name="stock" onChange={getInputData} className='form-select border-primary'>
                                        <option value="1">In Stock</option>
                                        <option value="0">Out Of Stock</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Base Price*</label>
                                    <input type="number" name="basePrice" onChange={getInputData} placeholder='Product Base Price' className={`form-control ${show && errorMessage.basePrice ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.basePrice ? <p className='text-danger text-capitalize'>{errorMessage.basePrice}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Discount*</label>
                                    <input type="number" name="discount" onChange={getInputData} placeholder='Product Discount' className={`form-control ${show && errorMessage.discount ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.discount ? <p className='text-danger text-capitalize'>{errorMessage.discount}</p> : null}
                                </div>


                                <div className="col-12 mb-3">
                                    <label>Description*</label>
                                    <div ref={refdiv} className='border-primary'></div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Pic*</label>
                                    <input type="file" name="pic" onChange={getInputData} className={`form-control ${show && errorMessage.pic ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Status</label>
                                    <select name="status" onChange={getInputData} className='form-select border-primary'>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>

                                <div className="col-12 mb-3">
                                    <button type='submit' className='btn btn-primary w-100'>Create</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
