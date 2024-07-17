'use client';
import React from 'react'
import Welcome from '@/components/raksha/ui'

const Solar = () => {
    const solar = {
        title: "Solar",
        desc: " Solar is dedicated to harnessing solar energy,",
        book: " Readme, Docs, Roadmap, Task, Discussion, Code, and Design",
        icons: [
            {
                src: "zondicons:exclamation-solid",
                width: 60,
                path: "/solar/readme",
            },
            {
                src: "ph:book-fill",
                width: 70,
                path: "/solar/docs",
            },
            {
                src: "ion:trail-sign",
                width: 65,
                path: "/solar/roadmap",
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
                title={solar.title}
                desc={solar.desc}
                book={solar.book}
                icons={solar.icons}
            />
        </div>
    )
}

export default Solar