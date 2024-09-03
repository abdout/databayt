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
        console.log(articles); // Add this line
    }, []);

    return (
        <>
            {status === "authenticated" && (
                <Link href={"/article/add"}>
                    <Button
                        variant="outline"
                        className="flex items-center gap-2 font-medium text-lg"
                    >
                        <Icon icon="ic:sharp-plus" width={20} />
                        اضافة مقال
                    </Button>
                </Link>
            )}
            <div className="flex justify-start">
            </div>
            <div className="flex flex-col pt-6 space-y-10" dir="rtl">
                {articles.map((article) => {
                    const updatedAt = new Date(article.updatedAt);
                    const formattedDate = `${updatedAt.getDate()}/${updatedAt.getMonth() + 1}/${updatedAt.getFullYear()}`;

                    return (
                        <div key={article._id} className="flex justify-between items-start">
                            <Link href={`/article/${article._id}`}>
                                <div className="flex gap-8   justify-between items-start">
                                    <Image
                                        src={article.image || '/hero/history.webp'}
                                        alt={article.title}
                                        width={180}
                                        height={150}
                                        className="object-cover object-center w-44 h-36"
                                    />
                                    <div className="flex flex-col space-y-2">
                                        <h4>{article.title}</h4>
                                        <p>{article.desc}</p>
                                        <div className="flex gap-4">
                                            <p>
                                                {article.author}
                                                <span className="text-3xl items-center " style={{ position: 'relative', top: '0.15em' }}> · </span>
                                                {formattedDate}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className="w-1/6">
                                {status === "authenticated" && (
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant='ghost' className='h-8 w-8 p-0'>
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
