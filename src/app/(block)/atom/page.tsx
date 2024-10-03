'use client';
import GithubButton from '@/components/atom/github-button'
import Preview from '@/components/atom/preview'
import Sidebar from '@/components/atom/sidebar'
import React, { useState } from'react'

const Atom = () => {
    const [selectedComponent, setSelectedComponent] = useState('');
    return (
        <>
            <GithubButton url="https://github.com/abdout/atom" />
            <div className="flex h-screen">
                <Sidebar onSelect={(component) => setSelectedComponent(component)} />
                <Preview component={selectedComponent} />
            </div>
        </>
    )
}

export default Atom