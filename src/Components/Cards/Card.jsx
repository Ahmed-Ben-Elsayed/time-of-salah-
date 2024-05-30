import React from 'react'
import fagr from '../../imgs/fajr-prayer.png'
import dhhr from '../../imgs/dhhr-prayer-mosque.png'
import asr from '../../imgs/asr-prayer-mosque.png'
import magrp from '../../imgs/sunset-prayer-mosque.png'
import ashha from '../../imgs/night-prayer-mosque.png'
import '../Cards/card.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
export const Card = ({name , time , img }) => {
    return (
        <>
            <div className='card'>
                <img src={img} />
                <p> {name} </p>
                <h2>{time}</h2>
            </div>
         </>
    )
}
