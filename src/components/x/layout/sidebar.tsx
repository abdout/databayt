'use client';
import React from 'react';
import { Icon } from "@iconify/react";
import Link from 'next/link';
import { sidebar } from './constant';
import SidebarLogo from './sidebar-logo';
import SidebarItem from './sidebar-item';
import SidebarTweetButton from './tweet-button';

const Sidebar = () => {

    return (
        <div className="col-span-1 h-full pr-4 md:pr-6">
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo />
                    {sidebar.map((item) => (
                        <SidebarItem
                            key={item.href}
                            href={item.href}
                            label={item.label}
                            icon={item.icon}
                        />
                    ))}
                        {/* <SidebarItem
                        onClick={() => {}}
                        icon={BiLogOut}
                        label="Logout"
                    /> */}
                    <SidebarTweetButton />
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

