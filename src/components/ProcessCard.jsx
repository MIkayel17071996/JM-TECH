import React from 'react';

const ProcessCard = ({ icon, title, description }) => {
    return (
        <div className="bg-transparent border border-yellow-500/20 p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center">
            <span className="text-4xl md:text-5xl mb-3">{icon}</span>
            <h3 className="text-lg md:text-xl font-semibold text-yellow-400 mb-1">{title}</h3>
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default ProcessCard;