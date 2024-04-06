'use client';
import React, { Suspense } from 'react';
import Layout from '@/component/docs/layout/layout';
import ProcedureLayout from '@/component/docs/layout/procedure';
import { data } from '@/constant/data';
import { usePathname } from 'next/navigation';
import { Abb } from '@/constant/abb';
import SubItem from '../page';
import MdIcon from '@/component/atom/icon/md';
import SmIcon from '@/component/atom/icon/sm';

const Activity = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const item = segments[segments.length - 3];
  const subitem = segments[segments.length - 2];
  const activity = segments[segments.length - 1];


  const Item = data.find((i) => i.item === item);
  if (!Item) {
    return <div>Item not found</div>;
  }

  const subItem = Item.subitem.find((s) => s.subitem === subitem);
  if (!subItem) {
    return <div>Subitem not found</div>;
  }

  const Activity = subItem.activity.find((a) => a === activity);
  if (!Activity) {
    return <div>Activity not found</div>;
  }

  const Definition = React.lazy(() => import(`@/component/docs/data/${subitem}/${activity}/definition`));
  const Purpose = React.lazy(() => import(`@/component/docs/data/${subitem}/${activity}/purpose`));
  const Description = React.lazy(() => import(`@/component/docs/data/${subitem}/${activity}/description`));
  const Equipment = React.lazy(() => import(`@/component/docs/data/${subitem}/${activity}/equipment`));
  const Circuit = React.lazy(() => import(`@/component/docs/data/${subitem}/${activity}/circuit`));
  const Criteria = React.lazy(() => import(`@/component/docs/data/${subitem}/${activity}/criteria`));

  return (
    <div className='flex flex-col items-start gap-4 pl-6 mt-8 w-[70rem]'>
      <div className='flex gap-4 items-center pb-4'>
        <SmIcon src={`/symbol/${subitem}.png`} alt={subitem} path='' />
      <div>
        <h1>{Abb[subitem.toUpperCase()]}</h1>
        <h1>{Abb[activity.toUpperCase()]}</h1>
      </div>

      </div>
      
     
      <Suspense fallback={<div>Loading...</div>}>
        <Layout
          definition={<Definition />}
          purpose={<Purpose />}
          procedure={
            <ProcedureLayout
              description={<Description />}
              equipment={<Equipment />}
              circuit={<Circuit />}
            />
          }
          criteria={<Criteria />}
        />
      </Suspense>
    </div>
  );
}

export default Activity;