import React from "react";
//Popuomodal file resuable component for popup modals 
const Popup = ({ title, message, onClose, children }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>{title}</h3>
        <p>{message}</p>

        {/* If children exist (like Yes/No buttons), render them */}
        {children ? (
          children
        ) : (
          <button className="popup-close" onClick={onClose}>
            Close
          </button>
        )}
      </div>
    </div>
  );
};

export default Popup;
