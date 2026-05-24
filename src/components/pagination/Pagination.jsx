import "./pagination.css";

export default function Pagination({pages, currentPage, setCurrentPage}) {

    let pagesNumbers= [];
    for (let i= 1; i <= pages; i++) {
        pagesNumbers.push(i);
    }

    return (
        <div className="pagination">
            <div className="container">
                <button className="prev" onClick={() => setCurrentPage(prev => prev - 1)} 
                        disabled={currentPage === 1}>Previous</button>
                {pagesNumbers.map(page => (
                    <div className={currentPage === page ? "pagesNumbers active" : "pagesNumbers"} 
                        onClick={() =>{setCurrentPage(page)}}>
                        {page}
                    </div>
                ))}
                <button className="next" onClick={() => setCurrentPage(next => next + 1)}
                    disabled={currentPage === pages}>Next</button>
            </div>
        </div>
    );
}