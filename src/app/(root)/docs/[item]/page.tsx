'use client';
import { usePathname, } from 'next/navigation';
import { data } from '@/constant/data';
import Navbar from '@/component/docs/layout/navbar';

const Item = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const item = segments[segments.length - 1];
  const Item = data.find((i) => i.item === item);

  if (!Item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1>hello</h1>
      
    </div>
  );
}

export default Item;