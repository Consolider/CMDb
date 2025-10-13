// context/BackgroundImageContext.tsx

import React, { createContext, useContext, useState } from 'react';

const BackgroundImageContext = createContext<string | undefined>(undefined);

export const BackgroundImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [backgroundImage, setBackgroundImage] = useState<string>("");

    return (
        <BackgroundImageContext.Provider value={{ backgroundImage, setBackgroundImage }}>
            {children}
        </BackgroundImageContext.Provider>
    );
};

export const useBackgroundImage = () => {
    return useContext(BackgroundImageContext);
};
