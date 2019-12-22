import React from 'react';

const Node = props => {
  return (
    <svg width="10%" height="10%" className={`${props.searchState}-node`}>
      <circle cx="50%" cy="50%" r="25%" />
      {/* THE FOLLOWING WORKS ONLY IN FIREFOX */}
      {/* <rect x="25%" width="50%" height="50%" rx="15" /> */}
    </svg>
  );
};

export default Node;
