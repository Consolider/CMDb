"use client"

import { useEffect } from 'react';

export default function RedirectToLogin() {

    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.replace('/movie');
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return <div>Loading Movie Data...</div>;
};
