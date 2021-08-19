import React from 'react';

const filter = ({ value, filterChange }) => {
  return (
    <label>
      Enter contact to search
      <input type="text" value={value} onChange={filterChange} />
    </label>
  );
};
export default filter;
