"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Auth } from './components/Authentication/Auth'
import AuthenticationPage from './components/Authentication/AuthenticationPage'
import { MantineProvider } from '@mantine/core'
import { Navbar } from './components/Navbar/Navbar'
import BannerHome from './components/HeroSections/BannerHome'
import FeatureSection from './components/HeroSections/FeatureSection/FeatureSection'
import BusinessSection from './components/HeroSections/BusinessSection/BusinessSection'
import QuestionSection from './components/HeroSections/QuestionSection'
import {Footer} from './components/HeroSections/FooterSection/Footer'
import ScrollToTop from './utils/Scroll/ScrollToTop'




const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-[#FFFFFF]'>
      <Navbar/>
      <BannerHome/>
      <FeatureSection/>
      <BusinessSection/>
      <QuestionSection/>
      <Footer/>
      <ScrollToTop/>
    </main>
  )
}
