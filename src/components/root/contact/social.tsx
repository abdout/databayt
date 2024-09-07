import React from 'react';
import { Icon } from "@iconify/react";

const Social = () => {
    return (
        <div className='flex flex-col items-center justify-center space-y-4 pt-8'>
            <h5 className='text-[14px] md:text-[19px]'>اتصل بينا</h5>
            <div className='grid grid-cols-4 md:grid-cols-8 items-center justify-center gap-8 md:gap-10 fill-current scroll' dir='ltr'>
                <a href="https://www.clubhouse.com/house/%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9?fbclid=IwY2xjawEsTnVleHRuA2FlbQIxMAABHT4-mDkQPNb1hBd5GcexlNrc6tX_xKmOg7vWOOwmPfY71KNUw9CtVx7ZxQ_aem_7UeyIfZyhVokJorFTciHNQ" target="_blank" rel="noopener noreferrer">
                    <Icon icon={"simple-icons:clubhouse"} height="45" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                </a>
                <a href="https://www.clubhouse.com/house/%D8%A7%D9%84%D8%AD%D8%B1%D9%83%D8%A9-%D8%A7%D9%84%D9%88%D8%B7%D9%86%D9%8A%D8%A9?fbclid=IwY2xjawEsTnVleHRuA2FlbQIxMAABHT4-mDkQPNb1hBd5GcexlNrc6tX_xKmOg7vWOOwmPfY71KNUw9CtVx7ZxQ_aem_7UeyIfZyhVokJorFTciHNQ" target="_blank" rel="noopener noreferrer">
                    <Icon icon={"ph:soundcloud-logo-fill"} height="45" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                </a>
                <a href="https://www.tiktok.com/@national.movement.sd" target="_blank" rel="noopener noreferrer">
                    <Icon icon={"ant-design:tik-tok-filled"} height="45" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                </a>
                <a href="https://www.instagram.com/national_movement_s.d/" target="_blank" rel="noopener noreferrer">
                    <Icon icon={"uil:instagram-alt"} height="45" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                </a>
                <a href="https://www.youtube.com/channel/UCTXtGXX9PG1OXtbs8USReEQ" target="_blank" rel="noopener noreferrer">
                    <Icon icon={"formkit:youtube"} height="45" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                </a>
                <a href="https://t.me/Nationalsd" target="_blank" rel="noopener noreferrer">
                    <Icon icon={"akar-icons:telegram-fill"} height="41" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                </a>
                <a href="https://www.facebook.com/national.movement.sd/?locale=ar_AR" target="_blank" rel="noopener noreferrer">
                    <Icon icon={"bi:facebook"} height="41" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                </a>
                <a href="https://x.com/nationalm_sd?lang=ar" target="_blank" rel="noopener noreferrer">
                    <Icon icon={"akar-icons:twitter-fill"} height="45" className="opacity-85 hover:opacity-100 transition-opacity duration-200 cursor-pointer" />
                </a>
            </div>
        </div>
    );
}

export default Social;
