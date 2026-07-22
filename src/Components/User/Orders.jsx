import React, { useEffect, useState } from 'react'

import { getCheckout } from "../../Redux/ActionCreators/CheckoutActionCreators"
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
export default function Orders() {
  let [orders, setOrders] = useState([])

  let CheckoutStateData = useSelector(state => state.CheckoutStateData)
  let dispatch = useDispatch()

  useEffect(() => {
    (() => {
      dispatch(getCheckout())
      if (CheckoutStateData.length) {
        setOrders(CheckoutStateData.filter(x => x.user === localStorage.getItem("userid")))
        // setOrders(CheckoutStateData)
      }
    })()
  }, [CheckoutStateData.length])
  return (
    <>
      {orders.length ?
        <div className='my-3'>
          {orders.map(item => {
            return <div className='table-responsive' key={item.id}>
              <h5 className='bg-secondary text-center p-2 text-light'>Order Details</h5>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Order ID</th>
                    <th>Order Status</th>
                    <th>Payment Mode</th>
                    <th>Payment Satus</th>
                    <th>Delivery Address</th>
                    <th>Subtotal</th>
                    <th>Shipping</th>
                    <th>Total</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.orderStatus}</td>
                    <td>{item.paymentMode}</td>
                    <td>{item.paymentStatus}</td>
                    <td>
                      <div>
                        <p>{item.deliveryAddress?.name}</p>
                        <p>{item.deliveryAddress?.phone}, {item.deliveryAddress?.email}</p>
                        <p>{item.deliveryAddress?.address}</p>
                        <p>{item.deliveryAddress?.pin}, {item.deliveryAddress?.city}, {item.deliveryAddress?.state}</p>
                      </div>
                    </td>
                    <td>&#8377;{item.subtotal}</td>
                    <td>&#8377;{item.shipping}</td>
                    <td>&#8377;{item.total}</td>
                    <td>{new Date(item.date).toLocaleDateString()}</td>
                  </tr>
                </tbody>
              </table>
              <h5 className='bg-primary text-center p-2 text-light'>Products In This Order</h5>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Color</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {item.products?.map(record => {
                    return <tr key={record.id}>
                      <td>
                        <Link to={`${import.meta.env.VITE_APP_IMAGE_SERVER}${record.pic}`} target='_blank'>
                          <img src={`${import.meta.env.VITE_APP_IMAGE_SERVER}${record.pic}`} height={70} width={70} alt="" />
                        </Link>
                      </td>
                      <td>{record.name}</td>
                      <td>{record.brand}</td>
                      <td>{record.color}</td>
                      <td>{record.size}</td>
                      <td>&#8377;{record.price}</td>
                      <td>{record.quantity}</td>
                      <td>&#8377;{record.total}</td>
                      <td>
                        <div className="btn-group">
                          <Link to={`/product/${record.product}`} className='btn btn-primary'>Buy Again</Link>
                          {item.orderStatus === "Delivered" ? <button className='btn btn-secondary'>Write Review</button> : null}
                        </div>
                      </td>
                    </tr>
                  })}
                </tbody>
              </table>
            </div>
          })}
        </div> :
        <div className='card p-5 text-center'>
          <h3>No Order History Found</h3>
          <Link to="/shop" className='btn btn-primary w-25 m-auto'>Shop Now</Link>
        </div>}
    </>
  )
}
