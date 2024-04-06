import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col space-y-6 w-[60rem] pb-20 pl-8'>
        <div>
            <h4>Total normal working hours: <strong>407 hr</strong></h4>
            <h4>Total overtime working hours: <strong>28 hr</strong></h4>
        </div>
        <div className='flex space-x-[40rem] pt-4'>
            <div className='items-center justify-center'>
                <h4>Project Manager</h4>
                <strong>Mahmoud Hamdi</strong>
                <h5 className='pt-1'>Singature:</h5>
                
            </div>
            <div>
                <h4>Engineer</h4>
                <strong>Osman Ali</strong>
                <h5 className='pt-1'>Singature:</h5>
            </div>
        </div>
    </div>
  )
}

export default Footer