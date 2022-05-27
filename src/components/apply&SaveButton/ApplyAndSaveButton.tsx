import React from 'react';

type ApplyAndSaveButtonProps = {
    onApplyAndSave: () => void
}

const ApplyAndSaveButton = ({ onApplyAndSave }: ApplyAndSaveButtonProps) => (
  <div>
    <button
      className="btn-apply"
      onClick={() => {
        onApplyAndSave();
      }}
    >
      Apply and Save
    </button>
  </div>
);

export default ApplyAndSaveButton;
