import { detail } from '@/constant/detial'
import React from 'react'
import Card from './card'

const CardList = () => {
  return (
    <div className='pl-4'>
      {detail.map((item, index) => (
        <div key={index}>
          <h2>{item.head}</h2>
          <div className="flex flex-wrap gap-20 pb-8"> {/* Tailwind CSS classes for flex container with gap */}
            {item.data.map((card, cardIndex) => (
              <Card
                key={cardIndex}
                photo={card.photo}
                name={card.name}
                rank={card.rank}
                hours={card.hours}
                phone={card.phone}
                email={card.email}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardList