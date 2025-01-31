import Link from 'next/link'
import React from 'react'

const Agent = () => {
    return (
        <div className='p-10'>
            {/* First Agent */}
            <div>
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

            {/* Second Agent */}
            <div className='mt-8'>
                <h4 className="font-heading text-3xl leading-[1.1] sm:text-3xl pb-2 ">
                    Automate project assembly from codebase
                </h4>
                <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                    Keywords: AI Agent, Python, LangChain, Dependency analysis, Auto-documentation, CI/CD <br />
                    Streamline project setup by scanning codebase, and auto-generating setup scripts and documentation. 
                    <Link href='#' 
                        className='text-blue-500'> inspiration underway</Link>
                </p>
            </div>
        </div>
    )
}

export default Agent