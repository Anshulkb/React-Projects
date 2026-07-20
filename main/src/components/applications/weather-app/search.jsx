

export default function SearchLocation({ location, setLocation, searchWeather }) {

    return (
        <div>
            <input type="text" name="searchLocation" placeholder="Enter city here"
                value={location} onChange={(event) => setLocation(event.target.value)} />
            <button type="button" onClick={searchWeather}>Search</button>
        </div>
    )
}