import React from 'react';
import Header from "@/components/ui/header";

interface WrapperProps {
    children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Header/>
            {children}
        </div>
    );
}