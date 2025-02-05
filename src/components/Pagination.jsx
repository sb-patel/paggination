const Pagination = ({currentPage, noOfPages, setCurrentPage}) => {
    return <div className="pagination-container">

        <button className="pagination-number" disabled={currentPage === 0} onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}>◀</button>
        {
            [...Array(noOfPages).keys()].map((n) => (
                <button className={"pagination-number " + (currentPage === n ? "active" : "")} key={n} onClick={() => setCurrentPage(n)}>
                    {n}
                </button>
            ))
        }
        <button className="pagination-number" disabled={currentPage === noOfPages - 1} onClick={() => setCurrentPage((prev) => Math.min(prev + 1, noOfPages - 1))}>▶</button>

    </div>;
};

export default Pagination;