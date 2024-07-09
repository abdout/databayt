
import Image from 'next/image'
import Link from 'next/link';
import Title from '@/components/atom/title';
import { media } from './constant';


const Media = () => {
  return (
    <div>
      <Title icon="fluent:video-28-regular" placeholder="  الوثائقيات الجديدة"/>
      <div className="flex gap-8 pt-6 scroll" dir="rtl">
        {media.map((item, index) => (
           <Link href={`/video?videoId=${item.videoId}&index=${index}`} key={index}>
          <div key={index} className=" justify-center items-center text-right">
            <Image
              src={item.image}
              alt={item.lineone}
              width={1000}
              height={700}
            />
            <p className="font-medium text-lg  pr-1 leading-7 mt-2">{item.lineone}</p>
            <p className="font-medium  text-lg pr-1 leading-7">{item.linetwo}</p>
            <div className="flex gap-4 pr-1 -mt-2">
              <p>
                {item.author}
                <span className="text-3xl items-center " style={{ position: 'relative', top: '0.15em' }}> · </span>
                {item.date}
              </p>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Media