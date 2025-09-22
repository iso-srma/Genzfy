import React, { useState } from 'react';

function Heart() {
  const [label, setLabel] = useState(false);
      
  function changeLabel() {
    setLabel(prev => !prev); 
  }

  return (
    <div>
      <button 
        onClick={changeLabel} 
        style={{ fontSize: "2rem", border: "none", background: "transparent", cursor: "pointer" }}
      >
        {label ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

export default Heart;
