// components/Navbar.tsx
import { data } from '@/constant/data';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Icon } from "@iconify/react";
import { Abb } from '@/constant/abb';

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [activeSubItem, setActiveSubItem] = useState<string | null>(null);

    const node = useRef<HTMLDivElement | null>(null);

    const handleClickOutside = (e: MouseEvent) => {
      if (node.current && node.current.contains(e.target as Node)) {
            return;
        }
        setActiveItem(null);
        setActiveSubItem(null);
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

  return (
    <nav ref={node}
    className="flex justify-between pt-1 absolute  top-0 w-full">
      <ul className="flex space-x-8 p-4">
        {data.map((item, itemIndex) => (
          <li 
            key={itemIndex} 
            onClick={() => setActiveItem(activeItem === item.item ? null : item.item)}
          >
            <h4 className={`text-black cursor-pointer ${activeItem === item.item  ? 'opacity-100' : 'opacity-50'}`}>{item.item.charAt(0).toUpperCase() + item.item.slice(1)}</h4>
            {activeItem === item.item  && (
              <div className="absolute text-black mt-4 items-center felx flex-col  bg-gray-100 w-max">
                {item.subitem.map((subitem, subitemIndex) => (
                  <div 
                    key={subitemIndex} 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent the click from being detected by the parent element
                      setActiveSubItem(activeSubItem === subitem.subitem ? null : subitem.subitem); // Toggle the dropdown menu
                  }}
                    className="relative"
                  >
                    <div 
                      
                      className={`flex items-center justify-between space-x-[50px] px-6  hover:bg-gray-200 p-2  w-full cursor-pointer ${activeSubItem === subitem.subitem ? 'opacity-100 bg-gray-300 hover:bg-gray-300' : 'opacity-50'}`}
                    >
                      <h4 className='justify-start'>{Abb[subitem.subitem.toUpperCase()]}</h4>
                      <div className='justify-end'>
                      <Icon icon="material-symbols-light:keyboard-arrow-right" width={30}/>

                      </div>
                      
                    </div>
                    {activeSubItem === subitem.subitem && (
                      <div className="absolute left-full top-0 bg-gray-100 felx flex-col w-full"> {/* Adjusted margin-left */}
                        {subitem.activity.map((activity, activityIndex) => (
                          <Link key={activityIndex} href={`/docs/${item.item }/${subitem.subitem}/${activity} `} onClick={() => setActiveItem(null)}>
                            <h4 className="cursor-pointer hover:bg-gray-200 p-[8.7px] px-6 py-[11px] w-full opacity-50 hover:opacity-100">{Abb[activity.toUpperCase()]}</h4>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;