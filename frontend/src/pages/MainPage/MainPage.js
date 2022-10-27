import React from 'react'
import './MainPage.css'
import { Navbar,CarouselComponent, Discussion} from '../../components'
const MainPage = () => {
  return (
    <div>
    <Navbar/>
    <CarouselComponent/>
    <Discussion/>
    </div>
  )
}

export default MainPage