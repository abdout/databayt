import Image from 'next/image'
import React from 'react'

const Contributors = () => {
  const contributors = [
    'abdout.jpg',
    'sedon.png',
    'z.jpeg',
    'p.jpeg',
    
    'c.jpeg',
    's.jpeg',
    'a.jpg',
    'aa.jpeg',
    '5.jpg',
   
    
    'mazin.jpg',
    'elliot.png',
    'v.jpeg', 
    'd.jpeg',
    
    '6.jpg',
    
    '4.png',
    '2.jpg',
    '3.jpg',
    '1.jpg'
  ];

  return (
    <div className="grid grid-cols-4 gap-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 max-w-4xl mx-auto justify-items-center">
      {contributors.map((contributor, index) => (
        <div 
          key={index} 
          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden bg-muted shadow-sm hover:shadow-md transition-shadow"
        >
          <Image 
            src={`/contributors/${contributor}`} 
            alt={`Contributor ${index + 1}`}
            fill
            className="object-cover" 
          />
        </div>
      ))}
    </div>
  )
}

export default Contributors
