import React from 'react'
import { Route, Routes } from 'react-router'

import RootLayout from './components/RootLayout'
import HomePage from './pages/HomePage'
import NotFound from './components/NotFound'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import InfoForm from './components/infoForm'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="infoForm" element={< InfoForm />} />

          <Route path="*" element={<NotFound />} />

        </Route>

      </Routes>


      <ToastContainer position="top-right" autoClose='1000' />

    </>

  )
}

export default App
