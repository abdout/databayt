'use client';
import React from 'react'
import Welcome from '@/components/raksha/ui'

const Hertz = () => {
    const hertz = {
        title: "Hertz",
        desc: " Hertz is dedicated to press and media services,",
        book: " Readme, Docs, Roadmap, Task, Discussion, Code, and Design",
        icons: [
            {
                src: "zondicons:exclamation-solid",
                width: 60,
                path: "/hertz/readme",
            },
            {
                src: "ph:book-fill",
                width: 70,
                path: "/hertz/docs",
            },
            {
                src: "ion:trail-sign",
                width: 65,
                path: "/hertz/roadmap",
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
                title={hertz.title}
                desc={hertz.desc}
                book={hertz.book}
                icons={hertz.icons}
            />
        </div>
    )
}

export default Hertz