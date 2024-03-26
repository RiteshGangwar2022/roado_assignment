import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import Home from './Home/Home'
function Dashboard() {
  return (
    <div className='Dashboard'>
       <Sidebar/>
       <Home/>
    </div>
  )
}

export default Dashboard