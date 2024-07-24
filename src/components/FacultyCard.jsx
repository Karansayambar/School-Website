// FacultyCard.jsx
import React from 'react';

const FacultyCard = ({ name, position, degree, experience }) => (
  <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-xs">
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-700 mb-1"><strong>Position:</strong> {position}</p>
    <p className="text-gray-700 mb-1"><strong>Degree:</strong> {degree}</p>
    <p className="text-gray-700"><strong>Experience:</strong> {experience}</p>
  </div>
);

export default FacultyCard;
