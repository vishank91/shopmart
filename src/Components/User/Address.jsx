import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const inputOptions = {
  name: "",
  email: "",
  phone: "",
  address: "",
  pin: "",
  city: "",
  state: "",
}
export default function Address() {
  let [showModal, setShowModal] = useState(false)
  let [option, setOption] = useState({})

  let [inputData, setInputData] = useState({ ...inputOptions })

  let [data, setData] = useState({ address: [] })
  let navigate = useNavigate()

  function create() {
    setShowModal(true)
    setOption({
      type: "Create"
    })
    setInputData({ ...inputOptions })
  }


  function getInputData(e) {
    let { name, value } = e.target
    setInputData({ ...inputData, [name]: value })
  }

  async function postData(e) {
    e.preventDefault()
    let address = data.address ?? []
    address.push({ ...inputData })
    setData({ ...data, address: address })

    let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${localStorage.getItem("userid")}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ ...data })
    })
    response = await response.json()
    setShowModal(false)
    setInputData(inputOptions)
  }

  useEffect(() => {
    (async () => {
      let response = await fetch(`${import.meta.env.VITE_APP_BACKEND_SERVER}/user/${localStorage.getItem("userid")}`, {
        method: "GET",
        headers: {
          "content-type": "application/json"
        }
      })
      response = await response.json()
      if (response)
        setData(response)
      else
        navigate("/login")
    })()
  }, [])
  return (
    <>
      <div>
        <div className='float-end'>
          <button className='btn btn-primary' onClick={create}>Add New Address</button>
        </div>
        <div>
          {data.address.map((item, index) => {
            return <div className='card p-3' key={index}>
              <p>{item.name}</p>
              <p>{item.email},{item.phone}</p>
              <p>{item.address}</p>
              <p>{item.pin},{item.city},{item.state}</p>
            </div>
          })}
        </div>

        <div className={`modal fade ${showModal ? 'show d-block' : ''}`} id="exampleModal">
          <div className="modal-dialog  modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{option.type}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={postData}>
                  <div className="row">
                    <div className="col-12 mb-3">
                      {/* <label>Name*</label> */}
                      <input type="text" name="name" value={inputData.name} onChange={getInputData} required placeholder='Full Name' className='form-control border-primary' />
                    </div>

                    <div className="col-md-6 mb-3">
                      {/* <label>Email*</label> */}
                      <input type="email" name="email" value={inputData.email} onChange={getInputData} required placeholder='Eamil Address' className='form-control border-primary' />
                    </div>

                    <div className="col-md-6 mb-3">
                      {/* <label>Phone Number*</label> */}
                      <input type="text" name="phone" value={inputData.phone} onChange={getInputData} required placeholder='Phone Number' className='form-control border-primary' />
                    </div>

                    <div className="col-12 mb-3">
                      {/* <label>Address*</label> */}
                      <textarea name="address" required value={inputData.address} onChange={getInputData} placeholder='Full Name' className='form-control border-primary' />
                    </div>

                    <div className="col-6 mb-3">
                      {/* <label>Pin*</label> */}
                      <input type="pin" name="pin" required value={inputData.pin} onChange={getInputData} placeholder='Pin Code' className='form-control border-primary' />
                    </div>

                    <div className="col-6 mb-3">
                      {/* <label>City Name*</label> */}
                      <input type="text" name="city" required value={inputData.city} onChange={getInputData} placeholder='City Name' className='form-control border-primary' />
                    </div>
                    <div className="col-12 mb-3">
                      {/* <label>State*</label> */}
                      <input type="text" name="state" required value={inputData.state} onChange={getInputData} placeholder='State Name' className='form-control border-primary' />
                    </div>
                    <div className="modal-footer">
                      <button type="submit" className="btn btn-primary w-100">{option.type}</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
