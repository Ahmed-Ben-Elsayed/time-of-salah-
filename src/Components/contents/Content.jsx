import React from 'react'
import '../contents/Content.css'
export const Content = ({city,date}) => {
    return (
        <div className='contents'>
            <div className='content-right' >
                <h3>{date}</h3>
                <h2>{city}</h2>
            </div>
            {/* <div className='content-left' >
                <h3> متبقى حتى صلاة المغرب   </h3>
                <h2>1: 23 : 30 </h2>
            </div> */}
        </div>
    )
}
