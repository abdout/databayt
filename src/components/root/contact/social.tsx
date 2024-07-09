import React from 'react'
import { Icon } from "@iconify/react";

const Social = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-4 pt-8'>
            <h5>اتصل بينا</h5>
            <div className='flex items-center justify-center gap-10 fill-current scroll' dir='ltr'>
                <Icon icon={"akar-icons:github-fill"} height="55" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                <Icon icon={"pajamas:discord"} height="60" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                <Icon icon={"bi:linkedin"} height="50" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                <Icon icon={"formkit:youtube"} height="60" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                <Icon icon={"bi:facebook"} height="55" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                <Icon icon={"cib:messenger"} height="55" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                <Icon icon={"akar-icons:twitter-fill"} height="60" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
            </div>
        </div>
    )
}

export default Social