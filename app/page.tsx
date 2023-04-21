import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Auth } from './components/Authentication/Auth'
import AuthenticationPage from './components/Authentication/AuthenticationPage'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <AuthenticationPage/>
    </main>
  )
}
