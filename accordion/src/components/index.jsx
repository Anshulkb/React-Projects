import { useState } from "react";
import data from "./data";
import './styles.css';

export default function Accordion() {
    const [selected, setSelected] = useState(null);
    const [multiple, setMultiple] = useState([]);
    const [enableMultiSelect, setEnableMultiSelection] = useState(false);
    const [clicked, setClicked] = useState(false);

    function onSingleSelect(currentId) {
        setSelected(selected === currentId ? null : currentId);
    }
    function onMultiSelect(currentId) {
        let temp = [...multiple];
        const indexCurrentId = temp.indexOf(currentId);
        if (indexCurrentId === -1) temp.push(currentId);
        else temp.splice(indexCurrentId, 1);
        setMultiple(temp);
    }
    function setDetails() {
        setEnableMultiSelection(!enableMultiSelect);
        setClicked(!clicked);
        const button = document.getElementById('idMultiBtn');
        if (!clicked) {
            button.classList.add('btnClick');
            button.classList.remove('multiBtn');
        }
        else {
            button.classList.remove('btnClick');
            button.classList.add('multiBtn');
        }
    }

    return <div className="wrapper">
        <button id="idMultiBtn" className="multiBtn" onClick={() => setDetails()

        }>Enable Multiple Selection</button>
        <div className="accordian">
            {
                data && data.length > 0 ?
                    data.map(oItem => <div className="item">
                        <div className="title" onClick={enableMultiSelect ? () => onMultiSelect(oItem.id) : () => onSingleSelect(oItem.id)}>
                            <h3>{oItem.question}</h3>
                            <span className="expandIconSize">+</span>
                        </div>
                        {selected === oItem.id || multiple.indexOf(oItem.id) !== -1 ?
                            <div className="content">{oItem.answer}</div> : null
                        }
                    </div>) :
                    <div>No data found...</div>
            }
        </div>
    </div>;
}