import React from 'react'
import Colis from './Colis'

const Content = (props) => {
    return (
        <div className='w-5/6'>
            {
                props.activeTab === 1 ? 
                <Colis/> : 
                props.activeTab === 2 ? 
                'Tab 2' : 
                props.activeTab === 3 ? 
                'Tab 3' 
                : props.activeTab === 4 ? 
                'Tab 4' : 
                'Tab 5'
            }
        </div>
    )
}

export default Content