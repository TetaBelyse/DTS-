import React, { useState } from 'react'
import Content from './Content'
import Tabs from './Tabs'

const MainContent = () => {
    const [activeTab, setactiveTab] = useState(1)

    const activateTab = (tab) => {
        setactiveTab(tab)
    }

    return (
        <div className='w-screen flex flex-col items-center space-y-4'>
            <Tabs activeTab={activeTab} activateTab={activateTab} />
            <Content activeTab={activeTab}/>
        </div>

    )
}

export default MainContent