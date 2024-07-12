import React from 'react';
import Globe from "@/components/magicui/globe";

export default function GlobeContainer() {

    return (
        <div className="bg-background relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border px-40 pb-40 pt-6 md:pb-60 md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/80 pb-4">
                Never forget again
            </span>
            <Globe className="top-72 sm:hidden md:flex" />
            <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
    )
}