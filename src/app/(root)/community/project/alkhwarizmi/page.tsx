'use client';
import React from 'react'
import Welcome from '@/components/raksha/ui'

const Alkhwarizmi = () => {
    const alkhwarizmi = {
        title: "Alkhwarizmi",
        desc: " Alkhwarizmi is a new initiative aimed at establishing an Institute of Technology,",
        book: " Readme, Docs, Roadmap, Task, Discussion, Code, and Design",
        icons: [
            {
                src: "zondicons:exclamation-solid",
                width: 60,
                path: "/alkhwarizmi/readme",
            },
            {
                src: "ph:book-fill",
                width: 70,
                path: "/alkhwarizmi/docs",
            },
            {
                src: "ion:trail-sign",
                width: 65,
                path: "/alkhwarizmi/roadmap",
            },
            {
                src: "fluent:task-list-square-24-filled",
                width: 65,
                path: "",
            },
            {
                src: "bitcoin-icons:message-filled",
                width: 90,
                path: "",
            },
            {
                src: "ant-design:github-filled",
                width: 65,
                path: "",
            },
            {
                src: "file-icons:figma",
                width: 37,
                path: "",
            },
        ],
    };
    return (
        <div dir='ltr'>
            <Welcome
                title={alkhwarizmi.title}
                desc={alkhwarizmi.desc}
                book={alkhwarizmi.book}
                icons={alkhwarizmi.icons}
            />
        </div>
    )
}

export default Alkhwarizmi