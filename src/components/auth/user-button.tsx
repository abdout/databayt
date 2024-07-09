"use client";
import Link from 'next/link';
import { Icon } from "@iconify/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/auth/ui/dropdown-menu";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/auth/ui/avatar";
import { useCurrentUser } from "@/hook/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";

export const UserButton = () => {
  const user = useCurrentUser();

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={user?.image || ""} />
            <AvatarFallback className="bg-black dark:bg-white">
            <Icon icon={"iconamoon:profile-fill"} height="15" className="text-white dark:text-black" />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <div>
          <DropdownMenuContent className="w-44 mt-2 z-50" align="end">
            <Link href="/profile">
              <DropdownMenuItem className="flex justify-end items-center">
                <span className="ml-2">الملف</span>
                <Icon icon={"iconamoon:profile-thin"} height="25" />
              </DropdownMenuItem>
            </Link>
            <Link href="/setting">
              <DropdownMenuItem className="flex justify-end items-center">
                <span className="ml-2">الضبط</span>
                <Icon icon={"circum:settings"} height="25" />
              </DropdownMenuItem>
            </Link>
            <Link href="/community">
              <DropdownMenuItem className="flex justify-end items-center">
                <span className="ml-2">المجتمع</span>
                <Icon icon={"ph:circle-thin"} height="25" />
              </DropdownMenuItem>
            </Link>
            <LogoutButton>
              <DropdownMenuItem className="flex justify-end items-center">
                <span className="ml-2">الخروج</span>
                <Icon icon={"material-symbols-light:logout-rounded"} height="25" />
              </DropdownMenuItem>
            </LogoutButton>
          </DropdownMenuContent>
        </div>
      </DropdownMenu>
    </div>
  );
};