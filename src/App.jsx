import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import HomePage from './Pages/HomePage'
import ShopPage from './Pages/ShopPage'
import ProductPage from './Pages/ProductPage'
import FeaturePage from './Pages/FeaturePage'
import FaqPage from './Pages/FaqPage'
import TestimonialPage from './Pages/TestimonialPage'
import CartPage from './Pages/User/CartPage'
import CheckoutPage from './Pages/User/CheckoutPage'
import ErrorPage from './Pages/ErrorPage'
import ContactUsPage from './Pages/ContactUsPage'
import PrivacyPolicy from './Pages/PrivacyPolicy'
import TermsAndConditions from './Pages/TermsAndConditions'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='' element={<HomePage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/feature' element={<FeaturePage />} />
        <Route path='/faq' element={<FaqPage />} />
        <Route path='/testimonial' element={<TestimonialPage />} />
        <Route path='/contact' element={<ContactUsPage />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/tc' element={<TermsAndConditions />} />

        {/* User Routes */}
        <Route path='/cart' element={<CartPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />


        <Route path='/*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
