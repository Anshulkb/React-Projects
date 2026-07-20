import NavigationList from "./navigationList";


export default function TreeView({ menu = [] }) {

    return <div className="navigation-container">
        <NavigationList list={menu}></NavigationList>
    </div>;
}