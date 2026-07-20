import { useState } from "react"
import UseLocalStorage from "./customHook";
import './index.css';

export default function ThemeChanger() {

    const [theme, setTheme] = UseLocalStorage('theme', 'dark');

    function modifyTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }
    console.log(theme);
    return <div className="mode" data-theme={theme}>
        <div className="container">
            <p>Click below to change theme</p>
            <button onClick={modifyTheme}>Change theme</button>
        </div>
    </div>
}