'use client';
import React from 'react'
import Welcome from '@/components/raksha/ui'

const Databayt = () => {
    const databayt = {
        title: "Databayt",
        desc: " Databayt is a decentralized application designed for business automation,",
        book: " Readme, Docs, Roadmap, Task, Discussion, Code, and Design",
        icons: [
            {
                src: "zondicons:exclamation-solid",
                width: 60,
                path: "/databayt/readme",
            },
            {
                src: "ph:book-fill",
                width: 70,
                path: "/databayt/docs",
            },
            {
                src: "ion:trail-sign",
                width: 65,
                path: "/databayt/roadmap",
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
                title={databayt.title}
                desc={databayt.desc}
                book={databayt.book}
                icons={databayt.icons}
            />
        </div>
    )
}

export default Databayt