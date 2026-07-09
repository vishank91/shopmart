import React, { useState } from 'react'

import TextValidators from '../../FormValidators/TextValidators'
export default function SignupPage() {
    let [data, setData] = useState({
        name: '',
        username: '',
        phone: '',
        email: '',
        password: '',
        cpassword: '',
    })
    let [errorMessage, setErrorMessage] = useState({
        name: "Full Name Field is Mendatory",
        username: "User Name Field is Mendatory",
        email: "Email Address Field is Mendatory",
        phone: "Phone Number Field is Mendatory",
        password: "Password Field is Mendatory",
    })
    let [show, setShow] = useState(false)

    function getInputData(e) {
        let { name, value } = e.target
        setData({ ...data, [name]: value })
        setErrorMessage({ ...errorMessage, [name]: TextValidators(e) })
    }
    function postData(e) {
        e.preventDefault()
    }
    return (
        <div>

        </div>
    )
}
