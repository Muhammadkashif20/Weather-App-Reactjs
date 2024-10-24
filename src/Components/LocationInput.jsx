import React from 'react';

const LocationInput = () => {
  return (
    <div className="mt-6">
      <input
        type="text"
        placeholder="Enter Location"
        className="px-4 py-2 rounded-full w-80 text-gray-700 focus:outline-none shadow-md"
      />
      <button className="ml-4 px-6 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
        Search
      </button>
    </div>
  );
};

export default LocationInput;
