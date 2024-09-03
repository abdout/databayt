import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { papers } from "./constant";
import Image from "next/image";
import Link from "next/link";

const PaperContent = () => {
    return (
        <>
            <div className="flex justify-center items-center -mx-4 sm:-mx-6 md:-mx-8 lg:-mx-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
                    {papers.map((paper, index) => (
                        <Link href={`/awrag/${paper.id}`} key={paper.id}>
                            <Card key={index} className="relative border-2 hover:border-yellow-400">
                                <Image
                                    src={paper.image || '/hero/history.webp'}
                                    alt={paper.title}
                                    width={180}
                                    height={150}
                                    className="object-cover object-center w-full h-44 sm:h-48 md:h-52 lg:h-56"
                                />
                                <CardContent className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center leading-8 font-black backdrop-blur-xl py-2 w-full mt-4">
                                        {paper.title.split(" ").map((word, wordIndex) => (
                                            <h4 key={wordIndex} className="font-black">{word}</h4>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

export default PaperContent;
