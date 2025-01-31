import React from 'react'
import Link from 'next/link'

const Block = () => {
    const blocks = ['Atom', 'Feature', 'Auth', 'Notification', 'Search', 'Chat', 'Trigger', 'Chart', 'Table','Editor','Filter','API', 'State', 'Youtube',  'Whatsapp', 'Motion', 'CSS', 'Editing' ,'Zap','Vote', 'Deal', 'Distributed','Blockchain','AI'];

    return (
        <div className='flex max-w-3xl flex-wrap gap-4 pt-2'>
            {blocks.map(block => (
                <Link key={block} href={`/${block.toLowerCase()}`}>
                    <p className='p-2 border border-black opacity-80 hover:opacity-100 cursor-pointer'>{block}</p>
                </Link>
            ))}
        </div>
    )
}

export default Block