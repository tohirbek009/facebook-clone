import { Avatar } from '@material-ui/core'
import React from 'react'
import './Style.css'

const Index = ({image, profileSrc, title}) => {
    return (
        <div style={{ backgroundImage: `url(${image})` }} className='story'>
            <Avatar src={profileSrc} className='story-avatar'/>
            <h4>{title}</h4>
        </div>
    )
}

export default Index