import React from 'react'

const Tabs = (props) => {
    // activeTab
    return (
        <div className="grid md:grid-cols-5 divide-x  w-5/6 rounded-full font-semibold">
            <div onClick={()=>props.activateTab(1)} className={`cursor-pointer flex justify-center items-center hover:bg-cyan-50 hover:text-black md:rounded-l-full h-12 ${props.activeTab === 1 ?'bg-cyan-200 text-black':'bg-cyan-100'}`}>Enregistrement de colis</div>
            <div onClick={()=>props.activateTab(2)} className={`cursor-pointer flex justify-center items-center hover:bg-cyan-50 hover:text-black h-12 ${props.activeTab === 2 ?'bg-cyan-200 text-black':'bg-cyan-100'}`}>Tableaus de bord</div>
            <div onClick={()=>props.activateTab(3)} className={`cursor-pointer flex justify-center items-center hover:bg-cyan-50 hover:text-black h-12 ${props.activeTab === 3 ?'bg-cyan-200 text-black':'bg-cyan-100'}`}>Suivi</div>
            <div onClick={()=>props.activateTab(4)} className={`cursor-pointer flex justify-center items-center hover:bg-cyan-50 hover:text-black h-12 ${props.activeTab === 4 ?'bg-cyan-200 text-black':'bg-cyan-100'}`}>Reclamation</div>
            <div onClick={()=>props.activateTab(5)} className={`cursor-pointer flex justify-center items-center hover:bg-cyan-50 hover:text-black md:rounded-r-full h-12 ${props.activeTab === 5 ?'bg-cyan-200 text-black':'bg-cyan-100'}`}>Rapport trimestriel</div>
        </div>
    )
}

export default Tabs