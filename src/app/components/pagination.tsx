"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface PaginationProps {
  currentPage: number;
}
const Pagination: React.FC<PaginationProps> = ({ currentPage }) => {
  const totalPages = 20;
  const router = useRouter();
  const movePage = (number: any) => {
    router.push(`/new/advice?id=${number}`);
  };
  return (
    <div className="flex justify-center mt-4">
      <nav className="inline-flex">
        <button
          // href={
          //   currentPage > 1
          //     ? `/new/advice?id=${currentPage - 1}`
          //     : `/new/advice?id=${currentPage}`
          // }
          className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-l hover:bg-gray-300"
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            onClick={() => movePage(index + 1)}
            // href={`/new/advice?id=${index + 1}`}
            key={index + 1}
            className={`px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 hover:bg-gray-300 ${
              currentPage === index + 1 ? "bg-blue-500 text-white" : ""
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          // href={
          //   currentPage < totalPages
          //     ? `?id=${currentPage + 1}`
          //     : `?id=${currentPage}`
          // }
          className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-200 border border-gray-300 rounded-r hover:bg-gray-300"
        >
          Next
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
