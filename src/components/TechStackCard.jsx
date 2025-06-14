import React from 'react';

const TechStackCard = ({ category, technologies }) => {
    return (
        <div className="bg-transparent border border-yellow-500/20 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">{category}</h3>
            <ul className="list-disc list-inside text-gray-300 text-lg leading-relaxed">
                {technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </div>
    );
};

export default TechStackCard;