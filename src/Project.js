import React from 'react';

function Project(props) {
  const { name, description, status, isVisible, onToggle } = props;

  return (
    <div>
      <h2 onClick={onToggle} style={{ cursor: 'pointer' }}>
        {name}
      </h2>

      <button onClick={onToggle}>
        {isVisible ? 'Hide Details' : 'Show Details'}
      </button>

      {isVisible && (
        <div>
          <p>Description: {description}</p>
          <p>Status: {status}</p>
        </div>
      )}
    </div>
  );
}

export default Project;