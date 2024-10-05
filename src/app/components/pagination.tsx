"use server";
import React from "react";
import Link from "next/link";
interface PaginationProps {
  currentPage: number;
}
const Pagination: React.FC<PaginationProps> = ({ currentPage }) => {
  const totalPages = 20;

  return (
    <div className="flex justify-center mt-4">
      <nav className="inline-flex">
        <Link
          href={
            currentPage > 1 ? `?id=${currentPage - 1}` : `?id=${currentPage}`
          }
          className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-l hover:bg-gray-300"
        >
          Previous
        </Link>
        {Array.from({ length: totalPages }, (_, index) => (
          <Link
            href={`?id=${index + 1}`}
            key={index + 1}
            className={`px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 hover:bg-gray-300 ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {index + 1}
          </Link>
        ))}
        <Link
          href={
            currentPage < totalPages
              ? `?id=${currentPage + 1}`
              : `?id=${currentPage}`
          }
          className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-r hover:bg-gray-300"
        >
          Next
        </Link>
      </nav>
    </div>
  );
};

export default Pagination;
