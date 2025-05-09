import React, { useState } from "react";
import IncomeCart from "./IncomeCart";

const AddIncome = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen text-white p-4 relative mt-20 ">
      {/* Header / Action Button */}
      <div className="mb-4 text-right md:hidden">
        <button
          onClick={() => setShowForm(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded"
        >
          Add Form
        </button>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Left: Form panel (visible inline only on desktop) */}
        <div className="hidden md:block md:basis-[30%] bg-red-500 p-4 rounded">
          <h2 className="text-xl font-bold mb-4">Form Section</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 rounded text-black"
            />
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right: Always Visible */}
        <div className="w-full bg-red-400 md:basis-[70%] bg-zinc-100  min-h-screen p-4 rounded">
          <h2 className="text-xl font-bold text-purple-500 mb-4">Income Overview</h2>
          <div className="grid grid-cols-1  md:grid-cols-3 gap-6 p-4">
  {/* Card 1 */}
  <div className="bg-blue-200 text-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold text-purple-400 mb-2">Total Income</h3>
    <p className="text-sm text-gray-300">
      This is some description for the first card. It can include brief summary text.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-gray-800 text-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold text-purple-400 mb-2">Latest Income</h3>
    <p className="text-sm text-gray-300">
      This is a second card with its own content and styling.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-gray-800 text-white rounded-lg shadow-md p-6">
    <h3 className="text-xl font-semibold text-purple-400 mb-2">Income Status</h3>
    <p className="text-sm text-gray-300">
      A third card here, useful for stats, links, or summary content.
    </p>
  </div>
  
</div>
<h1>fghjgfhj</h1>
<IncomeCart/>
        </div>
      </div>

      {/* Mobile Popup Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 md:hidden">
          <div className="bg-white text-black p-6 rounded shadow-lg w-[90%] max-w-md relative">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-2 right-2 text-red-600 font-bold"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">Form Section (Popup)</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded border"
              />
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddIncome;
