import React from 'react'
import { Link } from 'react-router-dom'

import Breadcrum from '../../../Components/Breadcrum'
import AdminSidebar from '../../../Components/Admin/AdminSidebar'
export default function AdminMaincategoryPage() {
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
                    </div>
                </div>
            </div>
        </>
    )
}
