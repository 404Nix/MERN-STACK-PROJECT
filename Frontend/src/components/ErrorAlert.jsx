import React from "react";

const ErrorAlert = ({ error }) => {
  // console.log(prop)
  return (
    <div className="p-4 mb-4 text-sm text-red-800 bg-red-50 dark:bg-[#B22222] dark:text-white text-center">
      <p>{error}</p>
    </div>
  );
};

export default ErrorAlert;
