import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { menu } from "./index";
import { useEffect, useState } from 'react';

export default function Navbar({ expanded }) {

    const [selectedItem, setSelectedItem] = useState('');
    // console.log(selectedItem);
    const navigate = useNavigate();

    function selectedItems(e) {
        const item = e?.target?.pathname;
        if (typeof item === 'string') {
            setSelectedItem(item);
            // navigate(e);
        }
    }

    useEffect(() => {
        setSelectedItem('/');
        navigate('/');
    }, []);
    return (
        <div className={expanded ? `sidebar active` : 'sidebar'}>
            <ul>
                {
                    menu && menu.length > 0 ?
                        menu.map(item => (
                            <li >
                                <Link className={`nav-list-item ${selectedItem === item.to ? 'selected' : ''}`} to={item.to} onClick={(e) => selectedItems(e)}>{item.label}</Link>
                            </li>
                        ))
                        : null
                }
            </ul>
        </div>
    );
}