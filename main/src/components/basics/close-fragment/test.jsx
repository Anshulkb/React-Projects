import { useRef, useState } from "react";
import ClickOutsideCloseFragment from ".";


export default function ClickOutsideFragment() {

    const [showContent, setShowContent] = useState(false);
    const ref = useRef();
    ClickOutsideCloseFragment(ref, () => setShowContent(false));

    return <div>
        {
            showContent ? <div ref={ref}>Open</div> : <button onClick={() => setShowContent(true)}>Show Content</button>
        }
    </div>;
}