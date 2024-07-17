'use client';
import React from 'react'
import Welcome from '@/components/raksha/ui'

const Raksha = () => {
    const raksha = {
        title: "Raksha",
        desc: " Raksha is dedicated to converting gasoline-powered tuk-tuks into electric vehicles,",
        book: " Readme, Docs, Roadmap, Task, Discussion, Code, and Design",
        icons: [
            {
                src: "zondicons:exclamation-solid",
                width: 60,
                path: "/raksha/readme",
            },
            {
                src: "ph:book-fill",
                width: 70,
                path: "/raksha/docs",
            },
            {
                src: "ion:trail-sign",
                width: 65,
                path: "/raksha/roadmap",
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
                title={raksha.title}
                desc={raksha.desc}
                book={raksha.book}
                icons={raksha.icons}
            />
        </div>
    )
}

export default Raksha