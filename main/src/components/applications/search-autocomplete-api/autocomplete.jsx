import { useEffect, useState } from "react"
import Suggestions from "./suggestions";


export default function Autocomplete() {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [searchParam, setSearchParam] = useState('');
    const [searchRes, setSearchRes] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    async function fetchUsersList() {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            console.log(data);
            if (data) {
                setUsers(data.users.map(items =>
                    items.firstName
                ));

            }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }
    function handleChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        if (query.length > 1) {
            const searchRes = users && users.length > 0 ?
                users.filter(item => item.toLowerCase().indexOf(query) > -1)
                : []
            setSearchRes(searchRes);
            setShowDropdown(true);
        }
        else {
            setShowDropdown(false);
            setSearchRes('');
        }
    }
    function handleClick(event) {
        const value = event.target.innerText;
        setSearchParam(value);
        setShowDropdown(false);
        setSearchRes([]);
    }
    console.log(users, searchRes);
    useEffect(() => {
        fetchUsersList();
    }, [])
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return (<div>
            <p>An unexpected error occured. <br></br>
                {error}</p>
        </div>
        );
    }
    return <div>
        <input type="text" name="search-users" placeholder="Search users here..."
            onChange={(e) => handleChange(e)} value={searchParam}
            style={{ 'marginTop': '1.5rem', 'width': '20rem' }}
        />
        {
            showDropdown && <Suggestions data={searchRes} onChange={handleClick}></Suggestions>
        }
    </div>
}