import React from 'react'

const Tabs = (props) => {
    // activeTab
    return (
        <div className="grid md:grid-cols-5 divide-x  w-5/6 rounded-full font-semibold">
            <div onClick={()=>props.activateTab(1)} className={`cursor-pointer flex justify-center items-center hover:bg-slate-600 hover:text-black md:rounded-l-full h-12 ${props.activeTab === 1 ?'bg-slate-800 text-white':'bg-gray-300'}`}>Dashboard</div>
            <div onClick={()=>props.activateTab(2)} className={`cursor-pointer flex justify-center items-center hover:bg-slate-600 hover:text-black h-12 ${props.activeTab === 2 ?'bg-slate-800 text-white':'bg-gray-300'}`}>Request</div>
            <div onClick={()=>props.activateTab(3)} className={`cursor-pointer flex justify-center items-center hover:bg-slate-600 hover:text-black h-12 ${props.activeTab === 3 ?'bg-slate-800 text-white':'bg-gray-300'}`}>Delivery</div>
            <div onClick={()=>props.activateTab(4)} className={`cursor-pointer flex justify-center items-center hover:bg-slate-600 hover:text-black h-12 ${props.activeTab === 4 ?'bg-slate-800 text-white':'bg-gray-300'}`}>Distribution</div>
            <div onClick={()=>props.activateTab(5)} className={`cursor-pointer flex justify-center items-center hover:bg-slate-600 hover:text-black md:rounded-r-full h-12 ${props.activeTab === 5 ?'bg-slate-800 text-white':'bg-gray-300'}`}>Claim</div>
        </div>
    )
}

export default Tabs