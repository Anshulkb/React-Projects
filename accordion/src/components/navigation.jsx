import '../App.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { menu } from "../components/navigation-data";
import { useEffect, useState } from 'react';

export default function Navbar({ expanded }) {

    const [selectedItem, setSelectedItem] = useState('');
    console.log(selectedItem);
    const navigate = useNavigate();

    function selectedItems(e) {
        if (typeof e === 'string') {
            setSelectedItem(e);
            navigate(e);
        }
    }
    // useEffect(()=>{
    //     document.addEventListener('click',(e)=>{
    //         if(selectedItem)

    //     });
    // },[]);
    return (
        <div className={expanded ? `sidebar active` : 'sidebar'}>
            <ul>
                {
                    menu && menu.length > 0 ?
                        menu && menu.map(item => (
                            <li >
                                <Link className={`nav-list-item ${selectedItem === item.to ? 'selected' : ''}`} to={item.to} onClick={(e) => selectedItems(e)}>{item.label}</Link>
                            </li>
                            // <li>
                            //     <NavLink
                            //         to={item.to}
                            //         className={({ isActive }) => (isActive ? "active" : "")}
                            //     >
                            //         {item.label}
                            //     </NavLink>
                            // </li>
                        ))
                        : null
                }
            </ul>
        </div>
    );
}