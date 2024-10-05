import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-transparent border-blue-500"></div>
    </div>
  );
};

export default Loader;
