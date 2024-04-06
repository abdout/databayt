'use client';
import { usePathname } from 'next/navigation';
import { data } from '@/constant/data';
import Link from 'next/link';

const SubItem = () => {
  const pathname = usePathname();
  const segments = pathname.split('/');
  const item = segments[segments.length - 2];
  const subitem = segments[segments.length - 1];

  const Item = data.find((i) => i.item === item);

  if (!Item) {
    return <div>Item not found</div>;
  }

  const Subitem = Item.subitem.find((s) => s.subitem === subitem);

  if (!Subitem) {
    return <div>Subitem not found</div>;
  }

  return (
    <div>
      <h1>{subitem}</h1>
      <p>This is the subitem page for {subitem} under {item}.</p>
      <Link href="/">Go back to home</Link>
    </div>
  );
}

export default SubItem;