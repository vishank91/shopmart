import React from 'react'

export default function ImageValidators(e) {
  if (e.target.files.length === 1) {
    let pic = e.target.files[0]
    if (!["image/jpeg", "image/jpg", "image/png", "image/gif", "image/webp"].includes(pic.type))
      return "Invalid Pic Format, Please Upload an Image of type jpeg, jpg, png, gif or webp"
    else if (pic.size > 1048576)
      return "Pic is too Heavy, Please Upload an Image Upto 1 MB"
    else
      return ""
  }
  else {
    return ""
  }
}
