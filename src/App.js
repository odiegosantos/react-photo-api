import { useState, useEffect } from "react"
import './App.css'
import Header from "./components/Header"
import Home from './components/Home'
import Footer from './components/Footer'

export default function App() {
  const [blackHeader, setBlackheader] = useState(false)

  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 50) {
        setBlackheader(true)
      } else {
        setBlackheader(false)
      }
    }
    window.addEventListener('scroll', scroll)

    return () => {
      window.removeEventListener('scroll', scroll)
    }
  }, [])


  return (
    <section className='page'>
      <Header black={blackHeader} />
      <Home />
      <Footer />
    </section>
  )
};