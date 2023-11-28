import React, { useState } from 'react';
import GuideCard from './GuideCard';

const FindaGuide = () => {
  const [guides, setGuides] = useState([]);
  const [countryId, setCountryId] = useState('');

  const fetchGuides = () => {
    fetch(`/guides/${countryId}`)
      .then(res => res.json())
      .then(data => setGuides(data));
  };

  return (
    <div className="bg-orange-300 min-h-screen p-6 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold text-center text-dark-700 mb-8">
        Find a Local Guide
      </h1>
      <div className="mb-4 flex justify-center">
        <select
          value={countryId}
          onChange={(e) => setCountryId(e.target.value)}
          className="block w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-purple-700"
        >
          <option value="">Select a country</option>
          <option value="2">India</option>
          <option value="6">Mexico</option>
          <option value="5">France</option>
          <option value="4">Spain</option>
          <option value="7">Morocco</option>
          <option value="3">United States</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {guides.map((guide, index) => (
          <GuideCard key={index} guide={guide} />
        ))}
      </div>
      <button className="bg-gray-700 text-white p-2 mt-4" onClick={fetchGuides}>
        Show guides
      </button>
    </div>
  );
};

export default FindaGuide;
