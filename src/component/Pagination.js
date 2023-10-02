import React from 'react';
import './Pagination.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    // Calculate the range of page numbers to display
    const pageNumbers = [];
    const maxPageDisplay = 10; // Show up to 10 page numbers

    // Calculate the starting and ending page numbers based on the current page
    let startPage = Math.max(currentPage - Math.floor(maxPageDisplay / 2), 1);
    let endPage = startPage + maxPageDisplay - 1;

    // Adjust the end page if it exceeds the total pages
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(endPage - maxPageDisplay + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {currentPage > 1 && (
                    <p
                        className="page-item">
                        <button className="page-link" onClick={() => onPageChange(currentPage - 1)}>
                            Previous
                        </button>
                    </p>
                )}

                {pageNumbers.map((page) => (
                    <p
                        key={page}
                        className={`page-item ${currentPage === page ? 'active' : ''}`}
                    >
                        <button className="page-link" onClick={() => onPageChange(page)}>
                            {page}
                        </button>
                    </p>
                ))}

                {currentPage < totalPages && (
                    <p className="page-item">
                        <button className="page-link" onClick={() => onPageChange(currentPage + 1)}>
                            Next
                        </button>
                    </p>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
