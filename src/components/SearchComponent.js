import React, { useState } from 'react';

const SearchComponent = () => {
        const [searchTerm, setSearchTerm] = useState('');

        const handleSearch = () => {
                console.log('Searching for:', searchTerm);
        };

        return (
                <input
                        type="search"
                        placeholder="Search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                        handleSearch();
                                }
                        }}
                        className="rounded-md px-3 py-1.5 focus outline-none focus:ring-0 border-2 bg-slate-50 border-amber-500 placeholder-slate-600"
                />
        );
};

export default SearchComponent;
