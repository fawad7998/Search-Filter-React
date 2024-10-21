// src/Filter.js
import React, { useState } from 'react';
import { items } from './Arr';
const Filter = () => {
    const [searchQuery, setSearchQuery] = useState('');


    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-2xl">
                <h1 className="text-4xl font-bold text-center mb-8 text-indigo-400">Search Filter App</h1>
                <div className="flex justify-center mb-6">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-gray-700 text-white border border-gray-600 rounded-lg p-3 w-2/3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <ul className="list-disc pl-5 space-y-2">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <li key={index} className="text-lg text-indigo-300">{item}</li>
                        ))
                    ) : (
                        <li className="text-lg text-red-500">No items found</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Filter;
