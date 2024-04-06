import React from 'react'
import Brand from './brand'
import Item from './item'
import Bottom from './bottom'

const Side = () => {
  return (
    <div className="fixed h-screen w-60 bg-gray-100 px-6">
      <div className="pl-4 pt-6">
        <Brand />
      </div>
      <div className="mt-8">
        <Item />
      </div>
      <div className="mt-14">
        <Bottom />
      </div>
    </div>
  )
}

export default Side