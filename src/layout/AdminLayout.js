import React from 'react'
import Tabs from '../components/Tabs'
import Navbar from '../components/Navbar'

const AdminLayout = ({ children }) => {
    return (
        <div className='w-screen flex flex-col items-center space-y-4'>
            <Navbar />
            <Tabs />
            <div className='w-5/6 pb-4'>
                {children}
            </div>

        </div>
    )
}

export default AdminLayout