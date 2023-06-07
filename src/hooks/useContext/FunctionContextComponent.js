import React, {useContext} from 'react';
import { ThemeContext, ThemeUpdateContext } from './ThemeContext';

export default function FunctionContextComponent() {
    const darkTheme = useContext(ThemeContext);
    const toggleTheme = useContext(ThemeUpdateContext)

    const themeStyle = { 
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem',
        margin: '2rem'
    }

    return(
        <div >
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
            <div style={themeStyle}>function Theme</div>
        </div>
    )
}