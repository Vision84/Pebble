import React, {useState} from 'react'
import {Link} from "react-router-dom"
import Logo from '../assets/adaptiveicon.png'
import Button from '@mui/material/Button'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


type NavbarProps = {
  current: string
}

const Navbar = (props: NavbarProps) => {
  // JavaScript
  const [icon, setIcon] = useState(localStorage.getItem("theme"))

  let currentMode = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  // Apply the initial mode
  document.documentElement.classList.add(currentMode);

  const darkModeToggle = () => {
    // Toggle dark mode
    if (currentMode === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      currentMode = "light";
      setIcon('light')
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      currentMode = "dark";
      setIcon('dark')
    }
  };

  return (
    <div className='bg-bg-light text-black dark:bg-bg-dark dark:text-off-white flex flex-row justify-between h-14 items-center'>
        <div className='flex flex-grow h-full p-3 text-1xl gap-6'>
            <img alt="Logo" src={Logo} className='h-full'/>
            <h1 className='text-2xl'>Pebble Education</h1>
        </div>

        <Button className="flex-shrink max-w-1" id="darkModeToggle" onClick={darkModeToggle} >
          {icon === 'dark' ?
          <DarkModeIcon color='primary' />:
          <LightModeIcon color='action' />}
        </Button>

        <div className="flex flex-shrink flex-row justify-evenly gap-8 h-full items-center text-1xl p-6 font-semibold">
            {props.current === "Home" ?
            <Link className="hover:underline underline-offset-2 font-bold" to="/">Home</Link>:
            <Link className="hover:underline underline-offset-2" to="/">Home</Link>}

            {props.current === "About Us" ?
            <Link className="hover:underline underline-offset-2 font-bold" to="/about">About Us</Link>:
            <Link className="hover:underline underline-offset-2" to="/about">About Us</Link>}

            {props.current === "Team" ?
            <Link className="hover:underline underline-offset-2 font-bold" to="/team">Join Our Team</Link>:
            <Link className="hover:underline underline-offset-2" to="/team">Join Our Team</Link>}

            {props.current === "Download" ?
            <Link className="hover:underline underline-offset-2 font-bold" to="/download">Download</Link>:
            <Link className="hover:underline underline-offset-2" to="/download">Download</Link>}

        </div> 
    </div>
  )
}


export default Navbar