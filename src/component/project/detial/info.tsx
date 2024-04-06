import MdIcon from '@/component/atom/icon/md'
import React from 'react'
import { Icon } from "@iconify/react";

const Info = () => {
  return (
  <div className="flex flex-col space-y-2 ml-[18px] my-6">
    <h3>Address: <span className="font-light">Dhahran Jubail Expy, Al Jubail 35417</span></h3>
    <h3>Hours: <span className="font-light">Open . Closes in 2 hr</span></h3>
    <h3>Contact: <span className="font-light">0551235804</span></h3>
    <h3>PPE: <span className="font-light">safety shoes, hard hats, gloves and vests</span></h3>
    <div className="flex gap-4 items-center">
        <h3>Status:</h3>
        <div className="rounded-full bg-yellow-400 w-[18px] h-[18px]"></div>
        <h3><span className="font-light">On progress</span></h3>
    </div>
    <h3>Est. time: <span className="font-light">2 months</span></h3>
    <div className="flex gap-6 items-center py-4">
        <MdIcon src="/islam.png" alt="Mosque" path="" />
        <Icon icon={"guidance:wc"} height="45" />
        <Icon icon={"material-symbols-light:water-full-outline"} height="50" />
        <Icon icon={"ph:bandaids-light"} height="50" />
    </div>
  </div>
  )
}

export default Info