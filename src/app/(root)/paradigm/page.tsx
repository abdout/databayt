import Intro from '@/components/paradigm/intro'
import Nonprofit from '@/components/paradigm/nonprofit'
import Wikipedia from '@/components/paradigm/wikipedia'
import React from 'react'

const Paradigm = () => {
    return (
        <div className='space-y-4'>
            <Intro />
            <Wikipedia />
            <Nonprofit />
        </div>
    )
}

export default Paradigm