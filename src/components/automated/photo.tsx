import Image from 'next/image'
import React from 'react'


const Photo = () => {
  return (
    <div className="w-full max-w-8xl mx-auto p-4">
      <div className="grid grid-cols-2 gap-2 h-[400px] overflow-hidden rounded-3xl">
        {/* Left half - large image */}
        <div className="relative h-full group">
          <Image
            src="/templates/a.png"
            alt="Large image"
            fill
            style={{ objectFit: 'cover' }}
            className="rounded-tl-md rounded-bl-3xl opacity-90 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        {/* Right half - 2x2 grid of smaller images */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-full">
          <div className="relative group">
            <Image
              src="/templates/a.png"
              alt="Top left small image"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
          <div className="relative group">
            <Image
              src="/templates/a.png"
              alt="Top right small image"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-tr-md opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>
          <div className="relative group">
            <Image
              src="/templates/a.png"
              alt="Bottom left small image"
              fill
              style={{ objectFit: 'cover' }}
              className="opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>

          {/* Bottom right small image with "Show all photos" always visible */}
          <div className="relative group">
            <Image
              src="/templates/a.png"
              alt="Bottom right small image"
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-br-md opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            />

            {/* "Show all photos" label, always visible, on the right side */}
            <div className="absolute bottom-4 right-4 bg-background px-3 py-2 rounded-md flex items-center gap-2 text-sm font-medium">
              {/* Icon before text (example: menu/grid icon) */}
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0 6a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m8-14a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m4-10a2 2 0 1 0 0-4a2 2 0 0 0 0 4m2 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-2 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/></svg>
              Show all photos
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Photo
