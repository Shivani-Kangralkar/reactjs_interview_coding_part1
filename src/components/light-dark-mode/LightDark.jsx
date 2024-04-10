import React from 'react'
import useLocalStorage from './useLocalStorage'
import './theme.css'

const LightDark = () => {
    // initailly theme is set to dark mode , key="theme" value="dark" is passed to custome hook
    const [value, setValue] = useLocalStorage("theme","dark");

    console.log("value", value);

    const handleToggle = () => {
        setValue(value === "light" ? "dark" : "light")
    }
  return (
    <div className='light-dark-mode' data-theme ={value}>
        <div className='container'>
            <p>Hello</p>
            <button onClick={handleToggle}>
                Change Theme
            </button>
        </div>
      
    </div>
  )
}

export default LightDark
