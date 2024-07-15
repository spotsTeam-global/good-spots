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
        <div className="p-4 flex items-center justify-between text-white shadow-lg sm:m-6 md:m-1 bg-indigo-100 rounded-3xl">            
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}                
            />
        </div>
    )
}