import "./suggestions.css";

export default function Suggestions({ data, onChange }) {

    return <div>
        <ul className="list-style">
            {
                data && data.length > 0 ?
                    data.map((item, index) => <li key={index} onClick={(e) => onChange(e)}>{item}</li>)
                    : null
            }
        </ul>
    </div>
}