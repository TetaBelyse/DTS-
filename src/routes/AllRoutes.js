import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Request from '../pages/request'
import Delivery from '../pages/delivery'
import Distribution from '../pages/distribution'
import Claim from '../pages/claim'
import Dashboard from '../pages/dashboard'
import SignIn from '../Authentications/SignIn'

const AllRoutes = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={< SignIn />} />
                <Route
                path='/dashboard'
                element={< Dashboard />} />
            <Route
                path='/request'
                element={<Request/>} />
            <Route
                path='/delivery'
                element={<Delivery />} />
            <Route
                path='/distribution'
                element={<Distribution />} />
            <Route
                path='/claim'
                element={<Claim/>} />
        </Routes>
    )
}

export default AllRoutes