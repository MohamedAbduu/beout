import React from 'react';

const GuideCard = ({ guide }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={guide.photo} alt={guide.name} className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{guide.name}</div>
        <p className="font-bold text-l mb-6">{guide.age} years old</p>
        <p className="text-gray-700 text-base">{guide.expertise}</p>
      </div>
    </div>
  );
};

export default GuideCard;

