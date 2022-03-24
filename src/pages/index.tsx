import * as React from "react"
import {useState,useEffect} from 'react';
import axios from 'axios'
import './App.css';
// import {Planet} from './model'


const IndexPage: React.FC = () => {
  const [planets, setPlanets] = React.useState<[]>([])


  useEffect(()=>{
    axios
    .get('https://space-meteor.herokuapp.com/planets')
    .then((response:any)=>{
      setPlanets(response.data);
    })
  }, [])

  return (
    <>
    <h1>TRAVEL TO THE PLANETS!</h1>
    
    <div className = 'planetContainer'>
    {planets?.map((planet:any)=>{ 
      return (
      <>
      <div className = 'planetCard'>
      <div key = {planet._id} ></div>
      <img src ={planet.image}></img>
      <h3>{planet.name}</h3>
      <div>{planet.description}</div>
      <h4>Year discovered: {planet.date_found}</h4>
      <h4>Ticket price: ${planet.ticket_price}</h4>
      <h4>Featured activity: {planet.activity}</h4>
      </div>
      
      </>
      )
    })
  }
  </div>

    </>
  )
}

export default IndexPage
