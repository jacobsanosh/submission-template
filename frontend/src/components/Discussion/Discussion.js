import React, { useEffect, useState } from 'react'
import './Discussion.css'
import DiscCard from './DiscCard'
import axios from 'axios'
import baseUrl from '../../utils/urls'
const Discussion = () => {
    const[discs,setDiscs]=useState([])
    useEffect(()=>{
        axios.get(`${baseUrl}/discussions/`).then((response)=>{
            console.log(response)
            setDiscs(response.data)
        },(error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>
        <h1>Discussion</h1>
        {discs.map((disc)=>{
            return(
                <DiscCard key={disc.id} image={disc.image} user_foreign={disc.user_foreign} link={disc.link} opinion={disc.opinion}/>
            )
        })}
        
    </div>

  )
}

export default Discussion