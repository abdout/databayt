'use client';
import React from 'react'
import { Icon } from "@iconify/react";
import Link from 'next/link';

const Community = () => {
  return (
    <div>
      <h1>المجتمع</h1>
      <p>عند هاتيك القرى عند المدائن</p>
      <p className='pt-8 pb-4'>
      أحب فكرة أنه هناك أشياء صغيرة تجمعنا، لحظات كونية نتشاركها بطريقة منفصلة. هل مر عليك يوم أربعاء وقضيت اليوم كله معتقدًا أنه يوم الخميس، ثم تكتشف في اليوم التالي أنك على حق مجدداً! أو كنت جالسًا في قطار وهناك قطار آخر بجانبك، وواحد منهما بدأ بالتحرك، لكنك لا تستطيع تحديد أي القطارين يتحرك؟ ماذا عن عندما تصعد السلم وتظن أن هناك درجة واحدة إضافية، وتلوح برجلك كالابله؟
      </p>
      <p>
      جورج كارلين - أشياء تجمعنا
      </p>
      <div className='flex gap-14 items-center pt-10'>
        <Link href='/community/club'>
        <div className='flex flex-col items-center justify-center gap-1 reveal-less'>
          <Icon icon="hugeicons:hold-04" width={100} className='' />
          <h5>نادي</h5>
        </div>
        </Link>
        <Link href='/community/tool'>
        <div className='flex flex-col items-center justify-center gap-1 reveal-less'>
          <Icon icon="la:tools" width={100} className='' />
          <h5>اداءة</h5>
        </div>
        </Link>
        <Link href='/community/project'>
        <div className='flex flex-col items-center justify-center gap-1 reveal-less'>
          <Icon icon="iconamoon:folder-light" width={100} className='' />
          <h5>مشروع</h5>
        </div>
        </Link>
        <Link href='/community/add'>
        <div className='flex flex-col items-center justify-center gap-1 reveal-less'>
          <Icon icon="fluent:extension-16-regular" width={100} className='' />
          <h5>اضافة</h5>
        </div>
        </Link>
      </div>

    </div>
  )
}

export default Community