
## Auth's Technical Record Document (TRD)

The **Objective** of Auth is to build a reusable block for authentication and authorization, developed by a community of interest.

**Table of Contents**
1. [Introduction](#introduction)
2. [Technology Used](#technology-used)
3. [Project Structure](#project-structure)
4. [Component Structure](#component-structure)
5. [Design Style](#design-style)
6. [Naming Convention](#naming-convention)
7. [Reusability](#reusability)
8. [Contribution](#contribution)

### Technology Used  
**Auth.js:** for providing the structural foundation of components.  
**Tailwind CSS:**  for styling and customizing components.  
**React:** for developing dynamic and interactive UI components.  
**TypeScript:** for strong typing and enhancing code quality.

### Project Structure  
src  
├── app  
│   ├── page.tsx  
│   └── global.css  
└── component  
    ├── atom  
    │   ├── button  
    │   ├── input  
    │   ├── icon  
    │   ├── image  
    │   └── radio  
    └── molecule  
        ├── sidebar  
        └── navbar  

page.tsx: Renders reusable components defined in the component directory.
global.css: Defines global styles, including styles for headings (h1-h6).
atom: Contains individual UI components that represent basic building blocks.
molecule: Comprises composite UI components built by combining atoms.

### Component Structure

Arrow Functional Component: Utilize arrow function syntax for defining components. You can streamline this process by using the "s7+" extension in VS Code, which allows you to quickly generate arrow function components by typing "rafce". Additionally, ensure your code is formatted consistently by using the Prettier extension.

### Design Style
**Sharp Corners**  
**No Shadow**  
**No Effects**  
**Hover:** default opacity 80% when hover increasers to 100%
this is applied to icons, texts, cards, inputs, buttons   
**Color Scheme:** follow the color scheme in figma.  
**Sharp and Fill Icons**  
**Outlined Icons for bars**  
**Follow Design in [Figma](https://www.figma.com/file/XhL9031u667fhzTDE4Lq0T/Atom?type=design&node-id=1-3&mode=design&t=o4R5Dal6hV5pzlic-0)**

### Naming Convention
**Folders and Files:** Named in lowercase, singular, and using direct words.
**Components:** Named in PascalCase (first letter of each word capitalized), with the second word also capitalized if applicable.
Example: Button, Input, Icon, Image, Radio, Sidebar, Navbar.


### Reusability
Content goes here

### Contribution
1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine.
3. Create a new branch for your feature or bug fix.
4. Make changes and ensure adherence to coding standards.
5. Test changes locally.
6. Commit changes and push to your fork.
7. Open a pull request, describing the changes made and why they should be merged.

Consider utilizing Git Flow for a more structured approach to version control.