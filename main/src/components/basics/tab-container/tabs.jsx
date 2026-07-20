import { useState } from "react"
import './index.css';

export default function Tabs({ content, onChange }) {

    const [currentTab, setCurrentTab] = useState(0);

    function handleClick(index) {
        setCurrentTab(index);
        onChange(index);
    }
    return <div className="wrapper">
        <div className="header">
            {
                content.map((item, index) =>
                    <div className={`tab-item ${currentTab === index ? 'active' : ''}`} key={item.label} onClick={() => handleClick(index)}>
                        <span className="label" >{item.label}</span>
                    </div>
                )
            }
        </div>
        <div className="content" style={{ color: 'red' }}>
            {
                content[currentTab] && content[currentTab].content
            }
        </div>
    </div>
}