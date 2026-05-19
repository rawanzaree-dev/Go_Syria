import './hero-header.css';

export default function HeroHeader() {
    return (
        <div className="hero-header">
            <div className="search-div">
                <div>
                    <i className="bi bi-search search-icon"></i>
                    <input type="text" placeholder="What are you looking for?" />
                </div>
                <button className="search-btn">Search</button>
            </div>
            <div className="titles">
                <h2>Go</h2>
                <h1>Syria</h1>
            </div>
        </div>
    );
}