import React from 'react';
import { Icon } from "@iconify/react";

const Social = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-4 pt-8'>
            <h5>اتصل بينا</h5>
            <div className='flex items-center justify-center gap-10 fill-current scroll' dir='ltr'>
                <a href="https://github.com/abdout/databayt" target="_blank" rel="noopener noreferrer">
                    <Icon icon={"akar-icons:github-fill"} height="55" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                </a>
                <a href="https://www.tiktok.com/@national.movement.sd" target="_blank" rel="noopener noreferrer">
                    <Icon icon={"ant-design:tik-tok-filled"} height="60" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/national_movement_s.d/" target="_blank" rel="noopener noreferrer">
                    <Icon icon={"uil:instagram-alt"} height="60" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                </a>
                <a href="https://www.youtube.com/channel/UCTXtGXX9PG1OXtbs8USReEQ" target="_blank" rel="noopener noreferrer">
                    <Icon icon={"formkit:youtube"} height="60" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                </a>
                <a href="https://www.facebook.com/national.movement.sd/?locale=ar_AR" target="_blank" rel="noopener noreferrer">
                    <Icon icon={"cib:messenger"} height="55" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                </a>
                <a href="https://www.facebook.com/national.movement.sd/?locale=ar_AR" target="_blank" rel="noopener noreferrer">
                    <Icon icon={"bi:facebook"} height="55" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                </a>
                <a href="https://x.com/nationalm_sd?lang=ar" target="_blank" rel="noopener noreferrer">
                    <Icon icon={"akar-icons:twitter-fill"} height="60" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                </a>
            </div>
        </div>
    );
}

export default Social;
