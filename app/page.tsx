"use client"
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Auth } from './components/Authentication/Auth'
import AuthenticationPage from './components/Authentication/AuthenticationPage'
import { MantineProvider } from '@mantine/core'
import { Navbar } from './components/Navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Navbar/>
    </main>
  )
}
