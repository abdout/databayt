import React from 'react'
import { Button } from '../ui/button'
import { Icon } from "@iconify/react";
import Link from 'next/link'

interface GithubButtonProps {
    url: string;
}
const GithubButton = ({ url }: GithubButtonProps) => {
    return (
        <Link
            href={url} 
            className='absolute top-10 right-14 reveal-less'>
            <Icon icon="bi:github" width={40} />
        </Link>
    )
}

export default GithubButton