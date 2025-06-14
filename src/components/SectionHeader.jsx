import React from 'react';

const SectionHeader = ({ title, subtitle }) => {
    return (
        <>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight leading-tight text-center">
                {title}
            </h2>
            <p className="text-center max-w-3xl mx-auto mb-16 text-lg text-gray-200 leading-7">
                {subtitle}
            </p>
        </>
    );
};

export default SectionHeader;