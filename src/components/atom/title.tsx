import React from 'react'
import { Rubik } from 'next/font/google'
import { useLocale } from '@/hooks/use-locale'
import { cn } from '@/lib/utils'

const rubik = Rubik({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin', 'arabic'],
});

const Title = (props: {
  title: string,
  description?: string
  icon?: string
}) => {
  const { isRTL } = useLocale();
  
  return (
    <div className={cn(
      'justify-start md:-ml-2 rtl:md:-mr-2 rtl:md:ml-0',
      rubik.className
    )}>
      <div>
        <h1 className="word-animation text-6xl font-extrabold rtl:font-black tracking-wide rtl:tracking-normal rtl:text-right">
          {props.title.split('').map((letter, index) => (
            <span 
              key={index}
              className={cn(
                "inline-block",
                isRTL && "rtl:text-justify rtl:leading-relaxed"
              )}
            >
              {letter}
            </span>
          ))}
        </h1>
        {props.description && (
          <p className="mt-2 text-muted-foreground rtl:text-base rtl:text-right rtl:font-medium">
            {props.description}
          </p>
        )}
      </div>
    </div>
  )
}

export default Title
