import React from 'react';

type ApplyButtonProps = {
    onApply: () => void
}

const ApplyButton = ({ onApply }: ApplyButtonProps) => (
  <div>
    <button
      className="btn-apply"
      onClick={() => {
        onApply();
      }}
    >
      Apply
    </button>

  </div>
);

export default ApplyButton;
