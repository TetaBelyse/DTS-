import React, { useState } from 'react'
import ColisContentFom from './ColisContentFom'

const Colis = () => {
    const [activeTab, setActiveTab] = useState(1)
    return (
        <div className=''>
            <div className="grid md:grid-cols-5  divide-x font-semibold">
                <div onClick={()=>setActiveTab(1)} className={`cursor-pointer rounded-tl-3xl flex justify-center items-center hover:bg-cyan-50 hover:text-black h-12 ${activeTab === 1 ?'bg-cyan-200 text-black':'bg-cyan-100'} `}>Livraison Colis</div>
                <div onClick={()=>setActiveTab(2)} className={`cursor-pointer rounded-tr-3xl flex justify-center items-center  hover:bg-cyan-50 hover:text-black h-12 ${activeTab === 2 ?'bg-cyan-200 text-black':'bg-cyan-100'} `}>Colis Enregistre</div>
            </div>
            <div className='border'>
                {
                    activeTab === 1 ? 
                    <ColisContentFom/>
                    : 
                    'TAB 2'
                }
            </div>
        </div>
    )
}

export default Colis