import { useState } from "react";
import Card from './card';


export default function GithubProfileFinder() {

    const [username, setUsername] = useState('');
    const [loading, setLoading] = useState(false);
    const [userData, setUserData] = useState(null);

    function searchProfile() {
        if (username !== '') {
            fetchData();
        } else {
            alert("Please enter username to search.")
        }
    }
    async function fetchData() {
        setLoading(true);
        try {
            const res = await fetch(`https://api.github.com/users/${username}`);
            const data = await res.json();
            if (data) {
                setUserData(data);
                setUsername('');
            }
        }
        catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    }
    if (loading) {
        return <div>Loading data...</div>;
    }
    return (
        <div>
            <div>
                <input type="text" name="search-by-username" placeholder="Search github username" value={username} onChange={(event) => setUsername(event.target.value)}
                    style={{ 'marginTop': '1rem', 'marginRight': '1rem' }} />
                <button onClick={searchProfile}>Search</button>
            </div>
            {
                userData && <Card data={userData}></Card>
            }

        </div>
    );
}