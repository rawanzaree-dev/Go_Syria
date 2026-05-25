import "./sort.css";

export default function Sort({length, sortItem, setSortItem}) {
    return (
        <div className="sort-section">
            <div className="container">
                <div className="tours-number">
                    <p>{length} tours found</p>
                    <i class="bi bi-info-circle"></i>
                </div>
                <select value={sortItem} onChange={(e) => setSortItem(e.target.value)}>
                    <option value="recommended">Recommended</option>
                    <option value="low">Price - Low to High</option>
                    <option value="high">Price - High to Low</option>
                </select>
            </div>
        </div>
    );
}