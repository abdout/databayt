import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

interface GithubButtonProps {
  label: string;
  url: string;
  disabled?: boolean;
}

const BlockButton = ({ url, label, disabled = false }: GithubButtonProps) => {
  return (
    <Link href={disabled ? '#' : url}>
      <Button
        className={`px-4 h-11 border text-[16px] border-black text-black hover:bg-gray-100 bg-[#fcfcfc] ${disabled ? 'opacity-50 cursor-default hover:bg-background' : ''}`}
      >
        {label}
      </Button>
    </Link>
  )
}

export default BlockButton