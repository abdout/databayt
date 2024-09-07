'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from 'next/link';
import { useArticle } from "./context";
import { domain } from "@/lib/domain";
import { DialogDemo } from "./dailog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { useSession } from "next-auth/react";
import { Icon } from "@iconify/react";

const ArticleContent: React.FC = () => {
    const { refreshArticles, articles, deleteArticle } = useArticle();
    const { data: session, status } = useSession();

    useEffect(() => {
        refreshArticles();
        console.log(articles);
    }, []);

    

    return (
        <>
            {status === "authenticated" && (
                <Link href={"/article/add"}>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2 font-medium text-sm md:text-lg "
                    >
                        <Icon icon="ic:sharp-plus" width={20} />
                        اضافة مقال
                    </Button>
                </Link>
            )}
            <div className="flex flex-col pt-6 space-y-10" dir="rtl">
                {articles.map((article) => {
                    const date = new Date(article.updatedAt);

                    // Format the day and year in English
                    const day = date.getDate(); // No need for Intl.NumberFormat for day
                    const year = date.getFullYear(); // Get the full year directly
            
                    // Format the month in Arabic
                    const month = date.toLocaleDateString('ar-EG', { month: 'long' });
            
                    // Combine the formatted parts
                    const formattedDate = `${day} ${month} ${year}`;

                    return (
                        <div key={article._id} className="flex flex-col md:flex-row justify-between items-start space-y-2 md:space-y-0">
                            <Link href={`/article/${article._id}`} className="flex gap-4 md:gap-8 items-start">
                                <Image
                                    src={article.image || '/hero/history.webp'}
                                    alt={article.title}
                                    width={180}
                                    height={150}
                                    className="object-cover object-center max-w-full block h-28 w-24 md:w-44 md:h-36"
                                />
                                <div className="flex flex-col space-y-2">
                                    <strong className="md:text-xl block truncate md:whitespace-normal md:overflow-visible md:w-auto w-48 whitespace-nowrap overflow-ellipsis">
                                        {article.title}
                                    </strong>
                                    <p className="text-sm md:text-base">{article.desc}</p>
                                    <div className="flex gap-2 md:gap-4">
                                        <p className='text-[12px] md:[16px] font-light'>
                                            {article.author}
                                            <span className="text-sm md:text-3xl items-center" style={{ position: 'relative', top: '0.15em' }}> · </span>
                                            {formattedDate}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <div className="w-full md:w-1/6 flex justify-end">
                                {status === "authenticated" && (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant='ghost' className='h-8 w-8 p-0 '>
                                                <span className='sr-only'>Open menu</span>
                                                <MoreHorizontal className='h-4 w-4' />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align='end'>
                                            <DropdownMenuLabel>الضبط</DropdownMenuLabel>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem
                                                onClick={() => {
                                                    if (article._id) {
                                                        navigator.clipboard.writeText(article._id);
                                                    }
                                                }}
                                            >
                                                نسخ
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Link href={`/article/${article._id}`}>
                                                    ملف
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>تجميد</DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => article._id && deleteArticle(article._id)}>حذف</DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default ArticleContent;