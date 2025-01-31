import Block from '@/components/contribute/block'
import Section from '@/components/contribute/section'
import Link from 'next/link'
import React from 'react'

const contribute = () => {
  return (
    <div className='flex flex-col justify-center items-center py-4 md:py-8 md:px-4 mt-4'>
      <div className='w-full max-w-screen-lg'>
      <p className="pb-2 max-w-[85%] leading-normal sm:text-lg sm:leading-7">
        Welcome
      </p>
      <h2 className="-ml-1 font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
      Contributors! 👋
        </h2>
        {/* <Title title='Contributors! 👋' description='Welcome' /> */}
        <div className='flex flex-col space-y-4 pt-1 '>
        <p className="pb-4 pt-2 max-w-[85%] leading-normal  sm:text-lg sm:leading-7">
            Thanks for your interest in contributing to Databayt. We're happy to have you here. <br />
            Below are some essential resources and informations to help you get started:
          </p>

          <Section
            title='Paradigm 🏷️'
            body='The core principles and conceptual framework that guide Databayt.'
            link='/tech-paradigm'
            label='Link to Paradigm'
          />
          <Section
            title='Documentation 📚'
            body='Before diving into the code, make sure to check out the documentation. It provides detailed explanations of project structure, guidelines, and how to contribute effectively.'
            link='/docs'
            label='Link to Documentation'
          />
          <Section
            title='Repository 🏠'
            body='Main repository serves as the central hub for the project. This is where you will find the core codebase and contribute to its development.'
            link='https://github.com/abdout/databayt'
            label='Link to Repository'
          />
          
          <Section
            title='Figma 🖌️'
            body='Design repository for the project, containing wireframes, prototypes, and visual design assets.'
            link='https://www.figma.com/file/your-file-id/your-file-name'
            label='Link to Figma'
          />
          <Section
            title='Localhost 💻'
            body='A manual to set up a local development environment on your computer. This includes installing the necessary dependencies and configuring the necessary environment variables.'
            link='/localhost'
            label='Link to Localhost Manual'
          />
          <Section
            title='Github 🐙'
            body='A manual to master GitHub, including branch, issue, fork, clone, push, pull request, and merge.'
            link='/github'
            label='Link to Github Manual'
          />
          <Section
            title='Pattern 🚊'
            body='Tackle problems systematically using standardized patterns. This guide introduces you to a structured approach where you follow consistent steps for every problem, ensuring efficient and reliable solutions.'
            link='/pattern'
            label='Link to Pattern Manual'
          />
          <Section
            title='Milestone 🎯'
            body='Explore milestones to understand short-term goals and objectives. This section outlines key targets we aim to achieve in the near future.'
            link='/milestone'
            label='Link to Milestone'
          />
          <Section
            title='Roadmap 🚀'
            body='Discover long-term vision and planned features for NMBD. The roadmap provides an overview of strategic direction and future developments.'
            link='/roadmap'
            label='Link to Roadmap'
          />
          <Section
            title='Building Blocks 🧱'
            body='In addition to the main repository, we have child repositories dedicated to specific building blocks which serve as integral parts of the overall system. For more details, you may browse through the following building blocks:'
          />
          <Block />

          <h4 className='pt-4'>Get in Touch 📬</h4>
          <p className='-mt-4'>
            Have a suggestion, idea, question, feedback, or need assistance? Feel free to{' '}
            <Link className='text-blue-700' href="https://github.com/abdout/databayt/issues">
              open an issue
            </Link>{' '}
            or reach out on{' '}
            <Link className='text-blue-700' href="">
              Discord
            </Link>.
          </p>

          <Section
            title='Code of Conduct 🤝'
            body='We maintain a code of conduct to ensure a welcoming and inclusive environment for all contributors. Please familiarize yourself with the code of conduct and adhere to its principles when interacting with the community.'
            link='/conduct'
            label='Link to Code of Conduct'
          />
          <Section
            title='Thank You 🙏'
            body='Once again, thank you for considering contributing to Databayt! Open source is the magic. ✨'
          />
        </div>
      </div>
    </div>
  )
}

export default contribute
