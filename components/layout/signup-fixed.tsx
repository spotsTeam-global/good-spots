"use client"

import React from 'react'; 
import { PlaceholdersAndVanishInput } from "../ui/signupvanish";

export default function SignupFixed() {

    const placeholders = [
        "Sign up here for updates",
        "Enter your Email",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submitted");
    };

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 flex items-center justify-between text-white shadow-lg sm:m-6 md:m-1">
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    )
}