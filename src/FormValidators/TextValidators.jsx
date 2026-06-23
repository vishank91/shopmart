import React from 'react'

export default function TextValidators(e) {
    let { value, name } = e.target
    switch (name) {
        case "name":
        case "icon":
        case "question":
            if (!value || value.length === 0)
                return name + " Field is Mendatory"
            else if (value.length < 2 || value.length > 100)
                return name + " Field Length Must Be 2-100"
            else
                return ""

        case "shortDescription":
        case "answer":
            if (!value || value.length === 0)
                return name + " Field is Mendatory"
            else if (value.length < 20 || value.length > 1000)
                return name + " Field Length Must Be 20-1000"
            else
                return ""


        default:
            return ""
    }
}
