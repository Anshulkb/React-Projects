import { Routes, Route } from "react-router-dom";
import { menu } from "./index";
import '../navigation/navigation.css';

export default function NavigationMenu({ showMenu }) {
    // console.table(menu.map(({ label, to }) => ({ label, to })));
    return (
        <div className={`details-page-container ${showMenu ? 'active' : ''}`}>
            <Routes>

                {
                    menu && menu.map(item => (
                        // <Route key={item.to} path={item.to} Component={item.element} />
                        <Route key={item.label} path={item.to} element={item.element} />
                    ))
                }
            </Routes>
        </div>
    )
}