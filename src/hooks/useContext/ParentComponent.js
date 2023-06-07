import React from 'react';
import { ThemeProvider } from './ThemeContext';
import FunctionContextComponent from './FunctionContextComponent';

export default function ParentComponent() {


    return (
        <>
            {/* ThemeContext.Provider where you wrap all the code that needs access to the information in the Context
             it has a single prop value which is going to be whatever the value of what your context is
             All the components needs to access the Conext needs to wrap into the Provider, all the children component within Provider have access to the variable in the value prop
            */}
            {/* Context is for passing down props all the way down into any of child components*/}
            <ThemeProvider> 
                <FunctionContextComponent />
            </ThemeProvider>
        </>
    )
}