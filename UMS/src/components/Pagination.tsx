import React from "react";

type PaginationProps = {
  page: number;
  setPage: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ page, setPage }) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        className="bg-gray-500 text-white px-4 py-2 mx-2"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="text-xl mx-2">Page {page}</span>
      <button
        className="bg-gray-500 text-white px-4 py-2 mx-2"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
