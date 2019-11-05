import React from 'react';

import './search-panel.css';

const SearchPanel = ({itemSearch}) => {
	return (
		<input type="text"
				className="form-control search-input"
				placeholder="Type to search"
				onChange = {itemSearch} />
	);
};

export default SearchPanel;
