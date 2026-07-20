import NavigationListItem from "./navigationListItem";



export default function NavigationList({ list = [] }) {

    return (
        <ul>
            {
                list && list.length > 0 ?
                    list.map(listItem =>
                        <NavigationListItem item={listItem} />
                    )
                    : null
            }
        </ul>
    );
}