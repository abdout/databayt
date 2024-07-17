'use client';
import React from 'react'
import Welcome from '@/components/raksha/ui'

const Frnas = () => {
    const frnas = {
        title: "Frnas",
        desc: " Frnas is dedicated to developing drones for the delivery of first aid supplies.",
        book: " Readme, Docs, Roadmap, Task, Discussion, Code, and Design",
        icons: [
            {
                src: "zondicons:exclamation-solid",
                width: 60,
                path: "/frnas/readme",
            },
            {
                src: "ph:book-fill",
                width: 70,
                path: "/frnas/docs",
            },
            {
                src: "ion:trail-sign",
                width: 65,
                path: "/frnas/roadmap",
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
                title={frnas.title}
                desc={frnas.desc}
                book={frnas.book}
                icons={frnas.icons}
            />
        </div>
    )
}

export default Frnas