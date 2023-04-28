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


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar/>
      <BannerHome/>
      <FeatureSection/>
      <BusinessSection/>
      <QuestionSection/>
    </main>
  )
}
