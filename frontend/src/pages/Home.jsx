import React from 'react'
import Landing from '../components/Landing'
import FeatureContainer from '../components/FeatureContainer'
import Feedback from '../components/Feedback'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className='mt-16'>
        <Landing/>
        <FeatureContainer/>
        <Feedback/>
        <Footer/>    
   </div>
  )
}

export default Home