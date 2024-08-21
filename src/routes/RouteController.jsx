import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from 'react-router-dom'
import SinglePage from './singlepage/SinglePage'

const RouteController = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/singlepage' element={<SinglePage/>} />
    </Routes>
  )
}

export default RouteController