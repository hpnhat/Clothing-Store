import React, { useState } from "react";
import { Link } from "react-router-dom";

const Pagination = ({ itemPerPage, totalItem, paginate }) => {
  
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalItem / itemPerPage); i++) {
    pageNumber.push(i);
  }

  const handleClick = (number) => {
    setCurrentPage(number);
    paginate(number);
  };

  return (
    <div className="flex-c-m flex-w w-full p-t-10 m-lr--7">
      {pageNumber.map((number) => (
        <Link
          key={number}
          className={`flex-c-m how-pagination1 trans-04 m-all-7 ${
            currentPage === number ? "active-pagination1" : ""
          }`}
          onClick={() => handleClick(number)}
          to="#"
        >
          {number}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;
