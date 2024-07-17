'use client';
import React from 'react'
import Welcome from '@/components/raksha/ui'

const Syngas = () => {
    const syngas = {
        title: "Syngas",
        desc: " Syngas is dedicated to converting organic waste materials into synthetic gas,",
        book: " Readme, Docs, Roadmap, Task, Discussion, Code, and Design",
        icons: [
            {
                src: "zondicons:exclamation-solid",
                width: 60,
                path: "/syngas/readme",
            },
            {
                src: "ph:book-fill",
                width: 70,
                path: "/syngas/docs",
            },
            {
                src: "ion:trail-sign",
                width: 65,
                path: "/syngas/roadmap",
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
                title={syngas.title}
                desc={syngas.desc}
                book={syngas.book}
                icons={syngas.icons}
            />
        </div>
    )
}

export default Syngas