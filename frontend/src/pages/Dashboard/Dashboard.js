import React from 'react'
import MainLayout from '../../components/MainLayout/MainLayout'
import './Dashboard.css'


function Dashboard() {
  return (
    <MainLayout>
    <div className='dashboard__container'>
     <div className='dashboard__leftcont'>
      <div className='dashboard__graphchart'>
       <div className='dashboard__graphsection'>

       </div>
       <div className='dashboard__chart'>
      
       </div>

      </div>
      <div className='dashboard__premium'>
      
      </div>
     </div>
     <div className='dashboard__profile'>
    
    
     </div>
    
    </div>
    </MainLayout>
  )
}

export default Dashboard