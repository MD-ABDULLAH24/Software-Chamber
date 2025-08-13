import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Hero from '../components/Hero'
import IntroStats from '../components/IntroStats'
import Service from '../components/Service'
import DevelopmentProcess from '../components/DevelopmentProcess'
import WhyChoose from '../components/WhyChoose'
import StackPower from '../components/StackPower'
import Faq from '../components/Faq'
import ClientSay from '../components/ClientSay'
import LetsTalk from '../components/LetsTalk'

const Home = () => {
  return (
    <>
    <MainLayout>
        <Hero/>
        <IntroStats/>
        <Service/> 
        <DevelopmentProcess/>
        <WhyChoose/>
        <StackPower/>
        <Faq/>
        <ClientSay/>
        <LetsTalk/>
    </MainLayout>
    </>
  )
}

export default Home