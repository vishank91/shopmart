import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Breadcrum from '../../../Components/Breadcrum'
import AdminSidebar from '../../../Components/Admin/AdminSidebar'
export default function AdminMaincategoryPage() {
    let [data, setData] = useState([])
    let [MaincategoryStateData, setMaincategoryStateData] = useState([])

    async function deleteRecord(id) {
        if (window.confirm("Are You Sure to Delete That Record")) {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory/${id}`, {
                method: "DELETE",
                headers: {
                    "content-type": "application/json"
                }
            })
            response = await response.json()
            setData(data.filter(x => x.id !== id))
        }
    }

    useEffect(() => {
        (async () => {
            let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/maincategory`, {
                method: "GET",
                headers: {
                    "content-type": "application/json"
                }
            })
            response = await response.json()
            setData(response)
            setMaincategoryStateData(response)
        })()
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
                        <h5 className='bg-primary text-light text-center p-2'>Maincategory <Link to="/admin/maincategory/create"><i className='bi bi-plus text-light float-end'></i></Link></h5>
                        <div className="table-responsive">
                            <table className='table table-bordered text-dark'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Pic</th>
                                        <th>Status</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(item => {
                                        return <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} target='_blank'>
                                                    <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${item.pic}`} height={60} width={80} alt="" />
                                                </Link>
                                            </td>
                                            <td>{item.status ? "Active" : "Inactive"}</td>
                                            <td><Link to={`/admin/maincategory/update/${item.id}`} className='btn btn-primary'><i className='bi bi-pencil-square'></i></Link></td>
                                            <td><button className='btn btn-danger' onClick={() => deleteRecord(item.id)}><i className='bi bi-x'></i></button></td>
                                        </tr>
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
