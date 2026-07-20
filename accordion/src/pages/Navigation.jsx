import { Routes, Route } from "react-router-dom";
import { menu } from "../components/navigation-data";
import '../css/Navigation.css';

export default function NavigationMenu() {
    console.table(menu.map(({ label, to }) => ({ label, to })));
    return (
        <div className="details-page-container">
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