import React from 'react';

const Node = props => {
  return (
    <svg width="40" height="40" className={`${props.searchState}-node`}>
      <circle cx="20" cy="20" r="10" />
    </svg>
  );
};

export default Node;
