import { useState } from "react"
import Tabs from "./tabs";


function RandomData() {
    return <div>Random content here...</div>
}
export default function TabContainer() {
    const tabs = [
        {
            label: 'Tab 1',
            content: <div>This is tab 1</div>
        },
        {
            label: 'Tab 2',
            content: <div>This is tab 2</div>
        },
        {
            label: 'Tab 3',
            content: <RandomData></RandomData>
        },
    ]

    function handleChange(currentTab) {
        console.log(currentTab);
    }
    return <Tabs content={tabs} onChange={handleChange}></Tabs>
}