import { Icon } from '@iconify/react'
import React from 'react'

const Stack = () => {
  return (
    <div className='flex flex-wrap gap-[62px] items-center justify-center pt-8'>
        <Icon icon="simple-icons:typescript" width="40" height="40" />
        <Icon icon="file-icons:figma" width="40" height="40" />
        <Icon icon="simple-icons:zod" width="43" height="43" />
        <Icon icon="bytesize:github" width="40" height="40" />
        <Icon icon="logos:vercel-icon" width="40" height="40" />
        <Icon icon="devicon:framermotion" width="40" height="40" />
        <Icon icon="simple-icons:shadcnui" width="36" height="36" />
        <Icon icon="simple-icons:resend" width="36" height="36" />
        <Icon icon="logos:rust" width="40" height="40" />
        <Icon icon="lineicons:claude" width="45" height="45" />
    </div>
  )
}

export default Stack