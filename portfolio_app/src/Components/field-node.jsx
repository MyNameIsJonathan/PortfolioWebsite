import React from 'react';

const Node = props => {
  return (
    <svg width="3%" height="3%" className={`${props.searchState}-node`}>
      <circle cx="50%" cy="50%" r="25%" />
    </svg>
  );
};

export default Node;
