import Link from "next/link";
import { registry } from "./registry";
import { useState, useEffect } from 'react';
import { Button } from "../ui/button";

interface PreviewProps {
    component: string | null;
}

const Preview: React.FC<PreviewProps> = ({ component }) => {
    const [Component, setComponent] = useState<React.ComponentType<any> | null>(null);

    useEffect(() => {
        if (component) {
            registry[component as keyof typeof registry]().then((module) => {
                const ImportedComponent = module.default;
                setComponent(() => ImportedComponent);
            });
        } else {
            setComponent(null);
        }
    }, [component]);

    if (!Component) {
        return (
            <div className="flex h-screen w-screen justify-center items-center">
                <div className="flex justify-center items-center">
                    <div className="space-y-4 text-center">

                        <h1 className="flex text-5xl font-bold items-center justify-center"> <span className="text-[34px] pr-2"> 🟨 </span>   Atom </h1>
                        <p className=" text-lg font-light">
                            A reusable ui components, buit with Shadcn.
                        </p>
                        <div className="flex items-center justify-center space-x-6 pt-4">
                          <p>&larr; Select one from sidebar</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="flex h-screen w-screen justify-center items-center">
            <div className="flex justify-center items-center">
                <Component />
            </div>
        </div>
    );
};

export default Preview;