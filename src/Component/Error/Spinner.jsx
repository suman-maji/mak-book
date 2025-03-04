import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-800 transition-all">
      <div className="flex flex-col items-center">
        <div className="loader"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg font-medium">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
};

export default Spinner;
