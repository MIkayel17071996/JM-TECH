import React from 'react';

const WhyChooseCard = ({ icon, title, description }) => {
    return (
        <div className="bg-transparent border border-yellow-500/20 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
            <h3 className="text-2xl font-semibold text-yellow-400 mb-4">{icon} {title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default WhyChooseCard;