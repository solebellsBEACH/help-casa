import React from "react";

export default function SubscriptionScreen() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://example.com/background-image.jpg")',
      }}
    >
      <div className="flex justify-center items-center space-x-8 my-12">
        <div className="bg-white rounded-lg shadow-lg p-6 w-64">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Free</h3>
          <p className="text-gray-600 mb-6">
            Access our full list of professionals and support.
          </p>
          <button className="bg-[#d39430] text-white font-medium py-2 px-4 rounded-md hover:bg-[#b07827]">
            Select
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 w-64">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Premium - $5/month
          </h3>
          <p className="text-gray-600 mb-6">
            Priority access during high-traffic hours.
          </p>
          <button className="bg-[#d39430] text-white font-medium py-2 px-4 rounded-md hover:bg-[#b07827]">
            Select
          </button>
        </div>
      </div>
    </div>
  );
}
