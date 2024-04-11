import React from "react";
import "./pagination.css"

const PaginationChild = ({ currentPage, totalPages = 10, onPageChange }) => {
  // These are numberes between prev and next
  // prev12345678910Next
  const generateNoOfPages = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        className="pagination-btn"
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {generateNoOfPages().map((pageNo) => (
        <button
        className={`pagination-btn ${currentPage === pageNo ? 'active' :''}`}
        key={pageNo}
        onClick={() => onPageChange(pageNo)}> {pageNo}</button>
      ))}

      <button
        className="pagination-btn"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationChild;
