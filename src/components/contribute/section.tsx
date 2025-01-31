import Link from 'next/link'
import React from 'react'

const Section = (props: {
    title: string,
    body: string,
    link?: string,
    label?: string,
}) => {

    return (
        <div>
            <h4 className='pt-3'>{props.title}</h4>
            <p>
                {props.body}
                {props.link && <Link href={props.link} className='text-blue-700'> {props.label}</Link>}
            </p>
        </div>
    )
}

export default Section