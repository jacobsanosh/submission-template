import React, { useEffect, useState } from 'react'
import './Discussion.css'
import DiscCard from './DiscCard'
import axios from 'axios'
import baseUrl from '../../utils/urls'
import axiosInstance from '../../utils/axios'
import { Button } from 'react-bootstrap'
const Discussion = () => {
    const[message,setMessage]=useState('')
    const[url,setUrl]=useState()
    const[currid,setCurrId]=useState()

    const handleSubmit=(e)=>{
        e.preventDefault()
        axiosInstance.post(`${baseUrl}/discussions/`,{
            "opinion": message,
            "link": url,
            "user_foreign": currid
        }).then((response)=>{
            console.log(response)
        })
    }
    useEffect(()=>{
        axiosInstance.get(`${baseUrl}/current-user/`).then((response)=>{
            console.log(response)
            setCurrId(response.data.id)
        },(error)=>{
            console.log(error)
        })
    },[])
    const[discs,setDiscs]=useState([])
    useEffect(()=>{
        axios.get(`${baseUrl}/discussions/`).then((response)=>{
            setDiscs(response.data)
        },(error)=>{
            console.log(error)
        })
    },[])
  return (
    <div>
        <h1>Discussion</h1>
        <div className="discuss__cards">

        
        {discs.map((disc)=>{
            return(
                <DiscCard key={disc.id} image={disc.image} user_foreign={disc.user_foreign} link={disc.link} opinion={disc.opinion}/>
            )
        })}
        </div>
        <div className="form__container">
            <h2>Enter Your experience</h2>
        <form className='discuss__form' action="">
            <input type="text"placeholder='experience'value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <input type="text" placeholder='link'value={url} onChange={(e)=>setUrl(e.target.value)}/>
            <Button onClick={handleSubmit}>Submit</Button>
        </form>
        </div>
        
    </div>

  )
}

export default Discussion