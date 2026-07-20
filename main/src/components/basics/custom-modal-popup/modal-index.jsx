import { useState } from "react"
import Modal from './modal';

export default function Component() {

    const [showPopup, setShowPopup] = useState(false);

    function handlePopup() {
        setShowPopup(!showPopup);
    }
    function onClose() {
        setShowPopup(false);
    }
    return <div>
        <button onClick={handlePopup}>Open Modal Popup</button>
        {
            showPopup && <Modal onClose={onClose} body={<div>Customized Body here</div>}></Modal>
        }
    </div>;
}