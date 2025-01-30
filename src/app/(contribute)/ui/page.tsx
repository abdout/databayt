import Following from '@/components/platform/platform/following'
import Menu from '@/components/platform/platform/notifications/Menu'
import PostNotification from '@/components/platform/platform/notifications/PostNotification'
import Unread from '@/components/platform/platform/notifications/Unread'
import UserNotification from '@/components/platform/platform/notifications/UserNotification'
import Post from '@/components/platform/platform/post'
import PostA from '@/components/platform/platform/post-a'
import Profile from '@/components/x/profile/profile'
import Tweet from '@/components/platform/platform/tweet'
import React from 'react'

const UI = () => {
  return (
    <div className='flex flex-col space-y-10 mt-6'>
        <Post />
        <PostA />
        <Profile />
        {/* <Menu />
        <PostNotification />
        <Unread />
        <UserNotification /> */}
        <Tweet />
        <Following />

    </div>
  )
}

export default UI