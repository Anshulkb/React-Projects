import './index.css';

export default function User({ data }) {

    const { avatar_url, name, public_repos, followers, following, html_url } = data;
    return (
        <div>
            <div style={{ 'padding': '1rem' }}>
                <img src={avatar_url} alt={name} className='user-avatar' />
                <div className="HBox">
                    <div className="VBox left">
                        <label>Name:</label>
                        <label>Public Repositories:</label>
                        <label>Followers:</label>
                        <label>Following:</label>
                        <label>Browse:</label>
                    </div>
                    <div className="VBox left" style={{ 'marginLeft': '1rem' }}>
                        <label>{name}</label>
                        <label>{public_repos}</label>
                        <label>{followers}</label>
                        <label>{following}</label>
                        <a href={html_url} target='_blank'>{name}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}