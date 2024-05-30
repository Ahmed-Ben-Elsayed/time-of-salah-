import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Content } from './Components/contents/Content'
import { Card } from './Components/Cards/Card'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import fagr from '../src/imgs/fajr-prayer.png'
import dohr from '../src/imgs/dhhr-prayer-mosque.png'
import asr from '../src/imgs/asr-prayer-mosque.png'
import magrp from '../src/imgs/sunset-prayer-mosque.png'
import ashha from '../src/imgs/night-prayer-mosque.png'
import axios from "axios"; 
function App() {
 const handlecityChange = (event) => {
    getData(event.target.value)
      if(event.target.value === "cairo"){
        selectCity("القاهرة")
      }
    else  if(event.target.value === "alexandria"){
      selectCity("الاسكندرية")
    }
    else if(event.target.value === "Suez"){
      
      selectCity("السويس")
    }
  else if(event.target.value === "matroh"){
      selectCity("مطروح")
    }
  else if(event.target.value === "Port Said"){
      selectCity("بور سعيد ")
    }
  else if(event.target.value === "qena"){
      selectCity(" قنا ")
    }
  };
  let [city, selectCity] = useState(" القاهرة ");
  let [times , setTimes] = useState([])
  let [date, setdate] = useState([])
 const getData = async(cityname="cairo")=>{
  const data = await axios.get(`https://api.aladhan.com/v1/timingsByCity/30-05-2024?city=${cityname}&country=Egypt`)
  setTimes(data.data.data.timings)
  setdate(data.data.data.date.readable)
  // console.log(times)
 }
  // api

           useEffect(function(){
            getData();
            // handlecityChange;
           },[])
    // 
  return (
    <>
    <div className='app'>

    <Content date={date} city={city}/>
    <Box className="sell" sx={{ minWidth: 120 }}>
      <FormControl  className="FormControl" fullWidth>
        <InputLabel id="demo-simple-select-label">المدينه </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
        //   value={age}
        label="Age"
          onChange={handlecityChange}
        >
          <MenuItem value={"cairo"}>القاهرة</MenuItem>
          <MenuItem value={"alexandria"}>الأسكندريه</MenuItem>
          <MenuItem value={"Suez"}>السويس</MenuItem>
          <MenuItem value={"matroh"}>مطروح </MenuItem>
          <MenuItem value={"Port Said"}>بورسعيد  </MenuItem>
          <MenuItem value={"qena"}> قنا </MenuItem>
        </Select>
      </FormControl>
    </Box>
    <div className='cards'>
    <Card name={"الفجر"} img={fagr} time={times.Fajr}/>
    <Card name={"الظهر"} img={dohr} time={times.Dhuhr}/>
    <Card name={"العصر"} img={asr} time={times.Asr} />
    <Card name={"المغرب"} img={magrp} time={times.Maghrib}/>
    <Card name={"العشاء"} img={ashha} time={times.Isha}/>

    </div>
        </div>
    </>
  )
}

export default App
