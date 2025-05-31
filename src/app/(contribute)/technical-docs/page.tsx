import React from 'react';

const DocsPage: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-rubik mb-2">Databayt</h1>
      <h2 className="text-2xl mb-6">Technical Record Document</h2>
      <h2 className="text-xl font-bold mb-6 pl-[2px]">Table of Contents</h2>
      <div className="flex flex-col md:flex-row pl-1">
        <div className="w-full md:w-1/3">
          <ul className="space-y-2">
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#architecture-overview">Architecture Overview</a></li>
            <li><a href="#technologies-used">Technologies Used</a></li>
            <li><a href="#project-structure">Project Structure</a></li>
            <li><a href="#database-schema">Database Schema</a></li>
            <li><a href="#api-endpoints">API Endpoints</a></li>
            <li><a href="#middleware">Middleware</a></li>
            <li><a href="#frontend">Frontend</a></li>
            <li><a href="#component-structure">Component Structure</a></li>
          </ul>
        </div>
        <div className="w-full md:w-2/3">
          <ul className="space-y-2">
            <li><a href="#routing">Routing</a></li>
            <li><a href="#state-management">State Management</a></li>
            <li><a href="#authentication-and-authorization">Authentication and Authorization</a></li>
            <li><a href="#deployment">Deployment</a></li>
            <li><a href="#ci-cd">Continuous Integration/Continuous Deployment (CI/CD)</a></li>
            <li><a href="#monitoring-and-logging">Monitoring and Logging</a></li>
            <li><a href="#future-improvements">Future Improvements</a></li>
            <li><a href="#references">References</a></li>
          </ul>
        </div>
      </div>
      <div className="w-full mt-14 space-y-4">
        <section id="introduction" className='space-y-2'>
          <h3>Introduction</h3>
          <p>
            Databayt is paradigm shift in the realm of business automation. As an open-source, publicly traded entity, Databayt mission is to empower businesses to streamline their operations by providing an innovative platform that facilitates the automation of diverse processes.
            Built upon the vision of creating reusable components and tools, Databayt aims to deliver unparalleled flexibility and efficiency. By leveraging compact, independent building blocks, users can assemble sophisticated applications tailored to their unique needs. As these applications evolve over time, they morph into comprehensive, reusable blocks capable of servicing similar clients with minimal customization.
            Our approach is dynamic and forward-thinking. With each iteration, Databayt targets specific milestones, offering its services as Software as a Service (SaaS). Furthermore, our aspiration extends beyond mere service provision; we envision Databayt as a central hub for businesses seeking automation solutions. Through fostering a collaborative community, we aim to establish Databayt as the go-to destination for businesses looking to enhance productivity and competitiveness through automation.
          </p>
        </section>
        <section id="architecture-overview">
          <h3 className='my-2'>Architecture Overview</h3>
          <p>Under process</p>
        </section>
        <section id="technologies-used">
          <h3 className='my-2'>Technologies Used</h3>
          <p>Databayt leverages a robust stack of cutting-edge technologies to deliver a seamless user experience and ensure optimal performance. Our tech stack includes:</p>
          <div className='my-4'>
            <div className="mb-2">
              <strong>Next.js:</strong> serves as the foundation for building dynamic and server-rendered React applications, enabling fast and efficient development.
            </div>
            <div className="mb-2">
              <strong>TypeScript:</strong> enhances code maintainability and scalability by providing static typing and improved tooling support for JavaScript development.
            </div>
            <div className="mb-2">
              <strong>React:</strong> utilized for building interactive user interfaces, providing a declarative and component-based approach to UI development.
            </div>
            <div className="mb-2">
              <strong>Node.js:</strong> powers the backend of the application, facilitating server-side logic and API development.
            </div>
            <div className="mb-2">
              <strong>Express.js:</strong> a minimal and flexible Node.js web application framework, enhances backend development with robust routing and middleware capabilities.
            </div>
            <div className="mb-2">
              <strong>MongoDB:</strong> serves as the primary database system, offering a flexible and scalable solution for storing and managing data.
            </div>
            <div className="mb-2">
              <strong>Prisma:</strong> serves as an ORM (Object-Relational Mapping) tool, simplifying database access and management with its intuitive query building capabilities.
            </div>
            <div className="mb-2">
              <strong>Figma:</strong> utilized for collaborative design and prototyping, enabling efficient creation and iteration of UI/UX designs.
            </div>
            <div className="mb-2">
              <strong>Tailwind CSS:</strong> utilized for rapid and customizable styling, enabling the creation of modern and visually appealing user interfaces.
            </div>
            <div className="mb-2">
              <strong>Auth.js:</strong> facilitates authentication and authorization functionalities, ensuring secure access to application resources.
            </div>
            <div className="mb-2">
              <strong>Rust and WebAssembly:</strong> provide high-performance computing capabilities, allowing for the development of efficient and secure web applications.
            </div>
          </div>
        </section>
        <section id="project-structure">
          <h3 className='my-2'>Project Structure</h3>
          <p>The project structure of the Databayt is organized to promote clarity, maintainability, and scalability. Below is an overview of the main directories and their purposes:</p>
          <div className='my-4'>
            <div className="mb-2">
              <strong>prisma:</strong> Contains Prisma configuration files for database management.
            </div>
            <div className="mb-2">
              <strong>public:</strong> Stores assets for the client-side.
            </div>
            <div className="mb-2">
              <strong>src:</strong> Houses the source code of the application.
            </div>
            <div className="mb-2">
              <strong>.env:</strong> Configuration file for environment variables.
            </div>
            <div className="mb-2">
              <strong>readme.md:</strong> Markdown file containing project documentation.
            </div>
            <h3 className='my-3'>src:</h3>
            <div className="mb-2">
              <strong>app:</strong> Contains pages and API endpoints.
            </div>
            <div className="mb-2">
              <strong>component:</strong> Houses reusable UI components used throughout the application.
            </div>
            <div className="mb-2">
              <strong>constant:</strong> Stores constant values and configurations.
            </div>
            <div className="mb-2">
              <strong>data:</strong> Contains data-related logic, such as data fetching utilities or mock data.
            </div>
            <div className="mb-2">
              <strong>hook:</strong> Stores custom React hooks used for side effects, or other functionalities.
            </div>
            <div className="mb-2">
              <strong>lib:</strong> Houses utility functions, helper classes, or external libraries.
            </div>
            <div className="mb-2">
              <strong>model:</strong> Defines data models or schemas used for data manipulation or validation.
            </div>
            <div className="mb-2">
              <strong>provider:</strong> Contains context for state management.
            </div>
            <div className="mb-2">
              <strong>schema:</strong> Stores schema definitions or validation rules used for data validation or database interactions.
            </div>
            <div className="mb-2">
              <strong>server:</strong> Contains server-action logic.
            </div>
            <div className="mb-2">
              <strong>type:</strong> Houses TypeScript type definitions used throughout the application.
            </div>
            <div className="mb-2">
              <strong>auth.config.ts:</strong> Configuration file for authentication settings.
            </div>
            <div className="mb-2">
              <strong>auth.ts:</strong> Contains authentication logic.
            </div>
            <div className="mb-2">
              <strong>middleware.ts:</strong> Defines middleware functions for request processing.
            </div>
            <div className="mb-2">
              <strong>next-auth.d.ts:</strong> TypeScript declaration file for Auth.js environment variables.
            </div>
            <div className="mb-2">
              <strong>routes.ts:</strong> Defines public routes, auth routes and redirect route.
            </div>
            <h3 className='my-3'>app:</h3>
            <div className="mb-2">
              <strong>(auth):</strong> Contains authentication-related pages.
            </div>
            <div className="mb-2">
              <strong>(root):</strong> Houses root pages.
            </div>
            <div className="mb-2">
              <strong>api:</strong> Stores API-related logic and configuration.
            </div>
            <div className="mb-2">
              <strong>readme:</strong> Documentation files providing guidance for developers.
            </div>
            <div className="mb-2">
              <strong>favicon.ico:</strong> Icon file displayed in browser tabs.
            </div>
            <div className="mb-2">
              <strong>globals.css:</strong> Global CSS styles applied throughout the application.
            </div>
            <div className="mb-2">
              <strong>layout.tsx:</strong> Layout component defining the overall structure of the application.
            </div>
            <div className="mb-2">
              <strong>page.tsx:</strong> Homepage.
            </div>
          </div>
        </section>
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default DocsPage;