import { useState } from "react";
import NavigationList from "./navigationList";






export default function NavigationListItem({ item }) {

    const [displayChildren, setChildToDisplay] = useState({});

    function displayChild(title) {
        setChildToDisplay(
            {
                ...displayChildren,
                [title]: !displayChildren[title]
            }
        )
    }
    console.log(displayChildren);
    return <li className="list-no-style">
        <div className="expand-icon">
            <p className="white-color">{item.label}</p>
            {
                item && item.children && item.children.length > 0 ?
                    <span onClick={() => displayChild(item.label)} className="menu-item-show-icon medium-padding-left white-color">{
                        displayChildren[item.label] ? '-' : '+'
                    }</span>
                    : null
            }
        </div>
        {
            item.children && item.children.length && displayChildren[item.label] > 0 ?
                <NavigationList list={item.children}></NavigationList>
                : null
        }
    </li >;
}