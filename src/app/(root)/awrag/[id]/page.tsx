'use client';
import { papers } from "@/components/root/paper/constant";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from 'react';
import { Icon } from "@iconify/react";
import Head from "@/components/root/paper/head";

// Assuming the structure of your Paper object, adjust as necessary
interface Paper {
  title: string;
  club: string;
  image: string;
  // Add other properties of Paper here
}

const PaperDetail = () => {
  const pathname = usePathname();
  // Provide a fallback value ('0' or another appropriate default) for id to ensure it's always a string
  const id = pathname.split("/").pop() || '0';
  // Initialize state with the correct type, which could be `Paper | null`
  const [paper, setPaper] = useState<Paper | null>(null);

  useEffect(() => {
    // Ensure id is always treated as a number. The fallback for parseInt should match your data's indexing.
    const paperIndex = parseInt(id, 10);
    const paperDetail = papers[paperIndex];
    if (paperDetail) {
      setPaper(paperDetail);
    }
  }, [id]);

  if (!paper) {
    return <div>Loading...</div>;
  }

  // Now TypeScript knows `paper` has a `title` property
  return (
    <div>
      
      <div className='md:w-[50rem]'>
            <Head title={paper.title} club={paper.club} image={paper.image}/>
            <hr className="border-t border-gray-300 my-2 md:my-5" />
            <div className='flex flex-col justify-center items-center pt-8 gap-2'>
            </div>
            <div className='flex flex-col   gap-2'>
                <p className="text-sm md:text-lg">إلى الشعب السوداني الأصيل في ربوع الوطن بمختلف فئاته وانتماءاته</p>
                <p className="text-sm md:text-lg">إلى الشباب السوداني خاصة المتطلع نحو الوحدة والنهضة والأمن والازدهار, وكريم القيم والأخلاق</p>
                <h3 className='text-lg md:text-lg pt-2 md:pt-4'>مقدمة وتعريف:</h3>
                <p className="text-sm md:text-lg">
                  هذا البيان  التأسيسي للحركة  الوطنية  للبناء  والتنمية،  التي  هي حركة اصلاح اجتماعي وسياسي شامل، تقيم رؤاها وتستقي قيمها من هدي الدين وكريم شيم السودانيين، وتوظف الشأن
                    الفكري والثقافي والفني والسياسي؛ من أجل إنجاز نهضة شاملة على أرض الوطن السودان.
                    تقوم الحركة الوطنية للبناء والتنمية على إرث المسلمين في السودان خاصة، وإرث شعب السودان عامة، وتجربة األمة المسلمة واألحرار في العالم، في السعي نحو الحرية والكرامة والنهضة االجتماعية والمادية، والتحرر من قوى الهيمنة واالستغلال.
                    تفهم  الحركة  السياسة  والعمل  االجتماعي  باعتباره  بناء  لمسارات الاصلاح والعمران ولا مجال  للنفعيات  والذاتيات  والكسب  بالباطل، ولا تستثني الحركة احداَ من عامة السودانين الصالحين في ان تتقدم لهم بدعوتها, وهي كذلك تحرص على أن ينتمي لقياداتها وصفها من عرف عنه نظافة اليد، وصالح المسعى، ومن يتقي معوج المسلك وفاسد العمل.
                    هذا البيان  التأسيسي للحركة  الوطنية  للبناء  والتنمية،  التي  هي حركة اصلاح اجتماعي وسياسي شامل، تقيم رؤاها وتستقي قيمها من هدي الدين وكريم شيم السودانيين، وتوظف الشأن
                    الفكري والثقافي والفني والسياسي؛ من أجل إنجاز نهضة شاملة على أرض الوطن السودان.
                    تقوم الحركة الوطنية للبناء والتنمية على إرث المسلمين في السودان خاصة، وإرث شعب السودان عامة، وتجربة األمة المسلمة واألحرار في العالم، في السعي نحو الحرية والكرامة والنهضة االجتماعية والمادية، والتحرر من قوى الهيمنة واالستغلال.
                    تفهم  الحركة  السياسة  والعمل  االجتماعي  باعتباره  بناء  لمسارات الاصلاح والعمران ولا مجال  للنفعيات  والذاتيات  والكسب  بالباطل، ولا تستثني الحركة احداَ من عامة السودانين الصالحين في ان تتقدم لهم بدعوتها, وهي كذلك تحرص على أن ينتمي لقياداتها وصفها من عرف عنه نظافة اليد، وصالح المسعى، ومن يتقي معوج المسلك وفاسد العمل.
                    هذا البيان  التأسيسي للحركة  الوطنية  للبناء  والتنمية،  التي  هي حركة اصلاح اجتماعي وسياسي شامل، تقيم رؤاها وتستقي قيمها من هدي الدين وكريم شيم السودانيين، وتوظف الشأن
                    الفكري والثقافي والفني والسياسي؛ من أجل إنجاز نهضة شاملة على أرض الوطن السودان.
                    تقوم الحركة الوطنية للبناء والتنمية على إرث المسلمين في السودان خاصة، وإرث شعب السودان عامة، وتجربة األمة المسلمة واألحرار في العالم، في السعي نحو الحرية والكرامة والنهضة االجتماعية والمادية، والتحرر من قوى الهيمنة واالستغلال.
                    تفهم  الحركة  السياسة  والعمل  االجتماعي  باعتباره  بناء  لمسارات الاصلاح والعمران ولا مجال  للنفعيات  والذاتيات  والكسب  بالباطل، ولا تستثني الحركة احداَ من عامة السودانين الصالحين في ان تتقدم لهم بدعوتها, وهي كذلك تحرص على أن ينتمي لقياداتها وصفها من عرف عنه نظافة اليد، وصالح المسعى، ومن يتقي معوج المسلك وفاسد العمل.
                </p>
            </div>
            <div className='flex gap-2 opacity-70 pb-8 hover:opacity-100 transition-opacity duration-200 mt-8 items-center'>
                <Icon icon={"icon-park-solid:edit"} height="25" />
                <h5>عدل الورقة</h5>
            </div>

        </div>
      {/* Display other details of the paper as needed */}
    </div>
  );
};

export default PaperDetail;