'use client';
import React from 'react'
import Welcome from '@/components/raksha/ui'

const Jena = () => {
    const jena = {
        title: "Jena",
        desc: " Jena is devoted to agricultural solutions,",
        book: " Readme, Docs, Roadmap, Task, Discussion, Code, and Design",
        icons: [
            {
                src: "zondicons:exclamation-solid",
                width: 60,
                path: "/jena/readme",
            },
            {
                src: "ph:book-fill",
                width: 70,
                path: "/jena/docs",
            },
            {
                src: "ion:trail-sign",
                width: 65,
                path: "/jena/roadmap",
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
                title={jena.title}
                desc={jena.desc}
                book={jena.book}
                icons={jena.icons}
            />
        </div>
    )
}

export default Jena