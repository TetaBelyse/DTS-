import React from 'react'
import Dashboard from './Dashboard'
import Request from './Request'
import Delivery from './Delivery'
import Distribution from './Distribution'
import Claim from './Claim'

const Content = (props) => {
    return (
        <div className='w-5/6'>
            {
                props.activeTab === 1 ? 
                <Dashboard/> : 
                props.activeTab === 2 ? 
                <Request/> : 
                props.activeTab === 3 ? 
                <Delivery/>
                : props.activeTab === 4 ? 
               <Distribution/> : 
               <Claim/>
            }
        </div>
    )
}

export default Content