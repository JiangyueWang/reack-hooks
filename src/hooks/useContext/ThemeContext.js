import React, { useContext, useState } from 'react';

//use React.createContext() function to create a ThemeContext
//export it so it can be used in the rest of the application
export const ThemeContext = React.createContext(); 
export const ThemeUpdateContext = React.createContext();

// create two custom hooks to access the access the ThemeContext and ThemeUpdateContext

// export function useTheme() {
//     return useContext(ThemeContext)
// }
// export function useThemeUpdateContext() {
//     return useContext(ThemeUpdateContext)
// }

export function ThemeProvider({children}) { 
    const [darkTheme, setDarkTheme] = useState(true); 

    function toggleTheme() {
            setDarkTheme(prevDarkTheme => !prevDarkTheme) 
    }

    return(
        <ThemeContext.Provider value={darkTheme}> 
            <ThemeUpdateContext.Provider value={toggleTheme}>
               {children} 
            </ThemeUpdateContext.Provider>
            
        </ThemeContext.Provider>
    )
}