import { useEffect } from 'react'
import { HashRouter} from 'react-router-dom'
import './App.css'
import useCustomizer from './hooks/useCustomizer'
import Navbar from './components/Navbar'
import Links from './Links'
import Footer from './components/Footer'

const App = () => {

  const {bgColor, fontFamily, headerFont, navColor, footerColor, buttonColor, buttonTextColor} = useCustomizer();

  // UseEffect
  useEffect(() => {
    document.body.style.backgroundColor = `#${bgColor}`
    if(fontFamily === "Arial") {
      document.body.style.fontFamily = `"Arial", sans-serif`;
    }
    if (fontFamily === "Roboto") {
      document.body.style.fontFamily = `"Roboto", sans-serif`;
    }
    if (fontFamily === "Poppins") {
      document.body.style.fontFamily = `"Poppins", sans-serif`;
    }
    if (fontFamily === "DotGothic16") {
      document.body.style.fontFamily = `"DotGothic16", sans-serif`;
    }
    if (fontFamily === "Helvetica") {
      document.body.style.fontFamily = `"Helvetica", sans-serif`;
    }
    if (fontFamily === "GFS Didot") {
      document.body.style.fontFamily = `"GFS Didot", serif`;
    }

    document.querySelector('h1').style.fontFamily = headerFont;
    document.querySelector('h2').style.fontFamily = headerFont;
    document.querySelector('h3').style.fontFamily = headerFont;
    document.querySelector('h4').style.fontFamily = headerFont;


    document.querySelector('nav').style.backgroundColor = navColor;
    document.querySelector('footer').style.backgroundColor = footerColor;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
      button.style.backgroundColor = buttonColor;
      button.style.color = buttonTextColor;
  })

  }, [bgColor, fontFamily, headerFont, navColor, footerColor, buttonColor, buttonTextColor])

  return (
    <HashRouter>
      <Navbar/>
      <Links/>
      <Footer/>
    </HashRouter>
  )
}

export default App
