import React from 'react'
import MdIcon from '../atom/icon/md'

const Readme = () => {
  return (
    <div className="flex flex-col gap-6">
      
      <h4>Skill</h4>
      <div className="flex gap-4 items-center">
        <MdIcon
          src="/contribute/typescript.png"
          alt="Typescript"
          path=""
        />

        <MdIcon
          src="/contribute/react.png"
          alt="React"
          path="https://github.com/Abdout/Databayt"
        />

        <MdIcon
          src="/contribute/nextjs.png"
          alt="Discord"
          path=""
        />

        {/* <MdIcon
          src="/contribute/express.svg"
          alt="Express"
          path=""
        /> */}

        <MdIcon
          src="/contribute/git.jpg"
          alt="Express"
          path=""
        />
     

    
        <MdIcon
          src="/contribute/mongodb.svg"
          alt=""
          path=""
        />
        <MdIcon
          src="/contribute/node.png"
          alt="MongoDB"
          path=""
        />

        <div className="pt-2 w-[43] h-[43]">
        <MdIcon
          src="/contribute/tailwind.png"
          alt="MongoDB"
          path=""
          />
          </div>
        
        <div className="w-[43px] h-[43px] pt-1">
          <MdIcon
            src="/contribute/webassembly.jpg"
            alt="Webassembly"
            path="https://github.com/Abdout/Databayt"
          />
        </div>

        <MdIcon
          src="/contribute/rust.svg"
          alt="Rust"
          path="https://github.com/Abdout/Databayt"
        />
     </div>
      <div className="text-[14px]">
        <h4>Block</h4>
  
        <div className="flex gap-4 pt-2">
          <div className="border border-black p-2 mt-3 ">Auth</div>
          <div className="border border-black p-2 mt-3 ">Memberbase</div>
          <div className="border border-black p-2 mt-3 opacity-60">Search</div>
          <div className="border border-black p-2 mt-3 opacity-60">SEO</div>
          <div className="border border-black p-2 mt-3">
            Responsive
          </div>
          <div className="border border-black p-2 mt-3 opacity-60">
            Animation
          </div>
          
        </div>

        <div className="flex gap-4">
          <div className="border border-black p-2 mt-3 ">Hook</div>
          <div className="border border-black p-2 mt-3 ">Icon</div>
          <div className="border border-black p-2 mt-3 ">Desgin</div>
          <div className="border border-black p-2 mt-3 ">Plugin</div>
          <div className="border border-black p-2 mt-3 ">Library</div>
          <div className="border border-black p-2 mt-3 opacity-60">Docs</div>
          <div className="border border-black p-2 mt-3 opacity-60">Optimize</div>
        </div>

       

        <div className="flex gap-4">
          
          <div className="border border-black p-2 mt-3 opacity-60">
            Metadata
          </div>
          <div className="border border-black p-2 mt-3 opacity-60">Test</div>
          <div className="border border-black p-2 mt-3 ">Deploy</div>
          <div className="border border-black p-2 mt-3 opacity-60">Secuirty</div>
          <div className="border border-black p-2 mt-3 opacity-60">AI</div>
          <div className="border border-black p-2 mt-3 opacity-60">
            Blochchain
          </div>
        </div>

        <div className=" py-2 mt-4 tracking-wider">
        <h4>Road map</h4>
          <div className=" space-y-1 font-meduim mt-1">
            <h5>Phase one</h5>
            <h5>Set point: Dashboard</h5>
            <h5>Inspired by: Monday</h5>
            <h5>Step:</h5>
          </div>

          <div className=" p-2 py-3 px-6 mb-8 space-y-1 cursor-pointer tracking-wide">
            <h5>1. Desgin </h5>
            <h5>2. Adope API </h5>
            <h5>3. Responsive </h5>
            <h5>4. Notification </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Readme