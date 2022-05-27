import React from 'react';

type ClearButtonProps = {
    onClear: () => void
}

const ClearButton = ({ onClear }:ClearButtonProps) => (
  <div>
    <button
      className="btn-apply"
      onClick={() => {
        onClear();
      }}
    >
      Clear
    </button>

  </div>
);

export default ClearButton;
