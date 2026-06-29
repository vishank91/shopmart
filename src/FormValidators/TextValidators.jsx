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

        case "basePrice":
            if (!value || value.length === 0)
                return name + " Field is Mendatory"
            else if (parseInt(value) < 1)
                return "Price Field Length Be 1 or More"
            else
                return ""


        case "stockQuantity":
            if (!value || value.length === 0)
                return name + " Field is Mendatory"
            else if (parseInt(value) < 0)
                return "Stock Quantity Field Length Be 0 or More"
            else
                return ""


        case "discount":
            if (!value || value.length === 0)
                return name + " Field is Mendatory"
            else if (parseInt(value) < 0 || parseInt(value) > 100)
                return "Discount Field Value Must Be 0-100"
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
