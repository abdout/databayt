'use client';
import { Icon } from "@iconify/react";
import Link from "next/link";
interface SidebarItemProps {
    label: string;
    href: string;
    icon: string;

}

const SidebarItem: React.FC<SidebarItemProps> = ({
    label,
    href,
    icon,
}) => {
    return (
        <div className="flex flex-row items-center">
            <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden" >
                <Icon icon={icon} width="28" />
            </div>
            <div className=" relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer" >
                <Link href={href}>
                    <Icon icon={icon} width="28" />
                    <p className="hidden lg:block text-white text-xl">
                        {label}
                    </p>
                </Link >
            </div>
        </div>
    );
};

export default SidebarItem;


