import React, { useEffect, useState } from 'react'
import "@theme-toggles/react/css/DarkSide.css"
import { DarkSide } from "@theme-toggles/react"

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setToggle(isDarkMode);
  }, []);

  const toggleTheme = () => {
    const newTheme = isToggled ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    setToggle(!isToggled);
  };

  return (
    <div>
      <DarkSide
        className='text-[25.5px] '
        type="button"
        id="dark-side-toggle"
        duration={750}
        placeholder="placeholder"
        onPointerEnterCapture={() => { }}
        onPointerLeaveCapture={() => { }}
        toggled={isToggled}
        toggle={toggleTheme}
      />
    </div>
  )
}

export default Toggle