import React, {useState} from "react"
import "../styles/theme.css"
import darkmodeToggler from "../assets/imgs/darkmode-toggler.png";
import lightmodeToggler from "../assets/imgs/lightmode-toggler.png";

const Nav = () => {
  const [lightMode, setLightMode ] = React.useState(true)
  let clickedClass = "clicked"
  const body = document.body
  const lightTheme = "light"
  const darkTheme = "dark"
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme")
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme)
  } else {
    body.classList.add(lightTheme)
  }

  async function switchTheme (e) {
    setLightMode(!lightMode)
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme)
      e.target.classList.remove(clickedClass)
      localStorage.setItem("theme", "light")
      theme = lightTheme
    } else {
      body.classList.replace(lightTheme, darkTheme)
      e.target.classList.add(clickedClass)
      localStorage.setItem("theme", "dark")
      theme = darkTheme
    }
  }

  return (
    <div id="nav">
    <img src={lightMode === true ? darkmodeToggler : lightmodeToggler}/><label className="switch">
    <input type="checkbox" className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={e => switchTheme(e)}/>
    <span className="slider round"></span>
    </label>
    </div>
  )
}

export default Nav