import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Breadcrum from '../../../Components/Breadcrum'
import AdminSidebar from '../../../Components/Admin/AdminSidebar'
import TextValidators from '../../../FormValidators/TextValidators'
import ImageValidators from '../../../FormValidators/ImageValidators'

import { updateProduct, getProduct } from '../../../Redux/ActionCreators/ProductActionCreators'
export default function AdminProductUpdatePage() {
    let { id } = useParams()

    let [data, setData] = useState({
        name: "",
        pic: "",
        status: true
    })
    let [errorMessage, setErrorMessage] = useState({
        name: "",
        pic: ""
    })
    let [show, setShow] = useState(false)

    let ProductStateData = useSelector(state => state.ProductStateData)
    let dispatch = useDispatch()
    let navigate = useNavigate()

    function getInputData(e) {
        let name = e.target.name
        let value = name === "pic" ? "product/" + e.target.files[0].name : e.target.value
        // let value = name === "pic" ? e.target.files[0]: e.target.value

        setData({ ...data, [name]: name === "status" ? value === "1" ? true : false : value })
        setErrorMessage({ ...errorMessage, [name]: name === "pic" ? ImageValidators(e) : TextValidators(e) })
    }
    async function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find(x => x !== "")
        if (error)
            setShow(true)
        else {
            let item = ProductStateData.find(x => x.id !== id && x.name?.toLocaleLowerCase() === data.name?.toLocaleLowerCase())
            if (item) {
                setErrorMessage({ ...errorMessage, name: 'Product With This Name Already Exist' })
                setShow(true)
                return
            }
            dispatch(updateProduct({ ...data }))

            // let formData = new FormData()
            // formData.append("id",data.id)
            // formData.append("name",data.name)
            // formData.append("pic",data.pic)
            // formData.append("status",data.status)
            // dispatch(updateProduct(formData))

            navigate("/admin/product")
        }
    }

    useEffect(() => {
        (() => {
            dispatch(getProduct())
            if (ProductStateData.length) {
                let item = ProductStateData.find(x => x.id === id)
                if (item)
                    setData({ ...data, ...item })
                else
                    navigate("/admin/product")
            }
        })()
    }, [ProductStateData.length])
    return (
        <>
            <Breadcrum title="Admin" />
            <div className="container-fluid my-3">
                <div className="row">
                    <div className="col-md-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-light text-center p-2'>Update Product <Link to="/admin/product"><i className='bi bi-arrow-left text-light float-end'></i></Link></h5>
                        <form onSubmit={postData}>
                            <div className="row">
                                <div className="col-12 mb-3">
                                    <label>Name*</label>
                                    <input type="text" name="name" value={data.name} onChange={getInputData} placeholder='Product Name' className={`form-control ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Pic</label>
                                    <input type="file" name="pic" onChange={getInputData} className={`form-control ${show && errorMessage.pic ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Status</label>
                                    <select name="status" value={data.status ? "1" : "0"} onChange={getInputData} className='form-select border-primary'>
                                        <option value="1">Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>

                                <div className="col-12 mb-3">
                                    <button type='submit' className='btn btn-primary w-100'>Update</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
