import React from 'react'
import './style.css'
import Navbar from '../Navbar/Navbar' 
import Banner from '../Banner/Banner'
import Metrics from '../Metrics/Metrics'
import Chart from '../Chart/Chart'
import Table from '../Table/Table'

function Home() {
  return (
    <div className='home'>
        <Navbar/>
        <div className='main'>
           <Banner/>
           <Metrics/>
           <Chart/>
           <Table/>
        </div>
    </div>
  )
}

export default Home