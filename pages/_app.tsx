import '../styles/tailwind.css'
import React, {useEffect} from 'react'

const App = ({Component, pageProps}) => {
  useEffect(() => {
    const setHeight = () => {
      let vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    }

    setHeight()

    window.addEventListener('resize', () => {
      setHeight()
    })
  }, [])
  return <Component {...pageProps} />
}

export default App
