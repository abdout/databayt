import { Button } from "@/components/ui/button";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const MobileHero = () => {

    return (
        <div className="h-screen relative ">
            <div className="h-screen pr-6 overflow-hidden ">
                <div
                    className="flex flex-col justify-center space-y-4 h-full -mt-10"
                >
                    <p className="md:text-xl ">المجتمع أولاً</p>
                    <h1 className="text-lg font-extrabold tracking-wide -mt-2 whitespace-nowrap">
                        الحركة الوطنية للبناء والتنمية
                    </h1>

                    <p className="w-[16rem] md:w-[50rem] text-sm md:text-xl font-extralight tracking-wide md:leading-[30px] pb-6">
                        هي حركة إصلاح اجتماعي وسياسي شامل، تقيم رؤاها وتستقي قيمها من هدي <strong className="font-semibold" >الدين  </strong>
                        وكريم شيم السودانيين، وتقوم على إرث المسلمين في السودان خاصة، وإرث شعب السودان
                        عامة، وتجربة الأمة المسلمة والأحرار في العالم،
                    </p>
                    <Link href="/register">
                        <Button size='lg' className="bg-yellow-400 text-black w-28 h-10 md:w-44 md:h-12 md:text-lg  text-sm hover:bg-[#ffd000]">يدك معانا</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MobileHero;
