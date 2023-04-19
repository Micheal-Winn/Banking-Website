import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Auth } from './components/Authentication/Auth'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Auth/>
    </main>
  )
}
