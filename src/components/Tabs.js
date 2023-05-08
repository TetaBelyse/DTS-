import React from 'react'

import { useNavigate, useLocation } from 'react-router-dom'

const Tabs = () => {

    const navigate = useNavigate()
    const location = useLocation()
    
    // activeTab
    return (
        <div className="grid md:grid-cols-5 divide-x  w-5/6 rounded-full font-semibold">
            <div onClick={()=>navigate('/dashboard', {replace:true})} className={`cursor-pointer flex justify-center items-center hover:bg-slate-600 hover:text-black md:rounded-l-full h-12 ${location.pathname === '/dashboard' ?'bg-slate-800 text-white':'bg-gray-300'}`}>Dashboard</div>
            <div onClick={()=>navigate('/request', {replace:true})} className={`cursor-pointer flex justify-center items-center hover:bg-slate-600 hover:text-black h-12 ${location.pathname === '/request' ?'bg-slate-800 text-white':'bg-gray-300'}`}>Request</div>
            <div onClick={()=>navigate('/delivery', {replace:true})} className={`cursor-pointer flex justify-center items-center hover:bg-slate-600 hover:text-black h-12 ${location.pathname === '/delivery' ?'bg-slate-800 text-white':'bg-gray-300'}`}>Delivery</div>
            <div onClick={()=>navigate('/distribution', {replace:true})} className={`cursor-pointer flex justify-center items-center hover:bg-slate-600 hover:text-black h-12 ${location.pathname === '/distribution' ?'bg-slate-800 text-white':'bg-gray-300'}`}>Distribution</div>
            <div onClick={()=>navigate('/claim', {replace:true})} className={`cursor-pointer flex justify-center items-center hover:bg-slate-600 hover:text-black md:rounded-r-full h-12 ${location.pathname === '/claim' ?'bg-slate-800 text-white':'bg-gray-300'}`}>Claim</div>
        </div>
    )
}

export default Tabs