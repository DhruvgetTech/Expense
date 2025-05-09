import React from "react";

const IncomeCart = () => {
  return (
    <div className="w-full bg-gray-800 text-white rounded-lg p-4 flex items-center justify-between shadow-md hover:shadow-lg transition-all mb-4">
      8522210
      {/* Left: Title & Amount */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
        <h1 className="text-lg font-semibold text-purple-400">Rent</h1>
        <p className="text-md text-green-400 font-bold">Rs. 3000</p>
      </div>
      {/* Right: Delete Button */}
      <button className="flex items-center gap-1 bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm transition">
        Delete
      </button>
    </div>
  );
};

export default IncomeCart;
