import React from 'react'
import { Icon } from "@iconify/react";
import Link from 'next/link';

const SidebarLogo = () => {
  return (
    <Link href={"/"} className='h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10'>
         <Icon icon='' width="28"  />  
    </Link >
  )
}

export default SidebarLogo