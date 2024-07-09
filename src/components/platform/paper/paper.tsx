import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { papers } from "./constant";
import Image from "next/image";
import Link from "next/link";

const PaperContent = () => {
    return (
        <>
            <div className="flex justify-center items-center -mx-10">
                <div className="grid grid-cols-4 gap-10">
                    {papers.map((paper, index) => (
                        <Link href={`/paper/${paper.id}`} key={paper.id}>
                        <Card key={index} className="relative border border-yellow-400">
                            <Image
                                src={paper.image || '/hero/history.webp'}
                                alt={paper.title}
                                width={180}
                                height={150}
                                className="object-cover object-center w-80 h-44 opacity-70"
                            />
                            <CardContent className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center leading-8 font-black  backdrop-blur-xl py-2 w-full mt-4">
                                    {/* Split the title and render each word on a new line */}
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
