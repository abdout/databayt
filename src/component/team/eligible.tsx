import React from 'react'

const Eligible = (props: {test: string[]}) => {
  return (
    <div className='flex flex-col p-6'>
    <h3>Eligibility</h3>
    <div className='flex space-x-4 pt-4'>
      {props.test.map((test, index) => (
        <h4 key={index} className={index !== props.test.length - 1 ? 'border-r border-black pr-2' : ''}>{test}</h4>
      ))}
    </div>
  </div>
  )
}

export default Eligible