import Link from 'next/link'
import React from 'react'

const Agent = () => {
    return (
        <div className='p-10'>
            <h4 className="font-heading text-3xl leading-[1.1] sm:text-3xl pb-2 ">
                Automate Upwork job applications
            </h4>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                Keywords: AI Agent, Python, LangGraph, Web scraping, Job scoring, LLM integration <br />
                Aymen is doing great with an open-source repo that we can build on. 
                <Link href='https://github.com/kaymen99/Upwork-AI-jobs-applier'
                    className='text-blue-500'> See Aymen&apos;s work</Link>
            </p>
        </div>
    )
}

export default Agent