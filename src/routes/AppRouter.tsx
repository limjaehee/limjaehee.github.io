import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from 'pages/home/page'
import ContactPage from 'pages/contact/page'
import ProfilePage from 'pages/profile/page'

function AppRouter() {
  return (
    <Router
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
