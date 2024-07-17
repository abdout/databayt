'use client';
import React from 'react'
import Welcome from '@/components/raksha/ui'

const Bullet = () => {
    const bullet = {
        title: "Bullet",
        desc: " Bullet is dedicated to the manufacturing of weapons,",
        book: " Readme, Docs, Roadmap, Task, Discussion, Code, and Design",
        icons: [
            {
                src: "zondicons:exclamation-solid",
                width: 60,
                path: "/bullet/readme",
            },
            {
                src: "ph:book-fill",
                width: 70,
                path: "/bullet/docs",
            },
            {
                src: "ion:trail-sign",
                width: 65,
                path: "/bullet/roadmap",
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
                title={bullet.title}
                desc={bullet.desc}
                book={bullet.book}
                icons={bullet.icons}
            />
        </div>
    )
}

export default Bullet