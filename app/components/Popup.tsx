import React, { useState, useEffect } from "react";
import Filters from "./Filters";
import Hotel from "./types";

interface PopupProps {
  onClose: () => void;
  hotels: Hotel[];
}

const Popup: React.FC<PopupProps> = ({ onClose, hotels }) => {
  // State to manage the visibility of the popup
  const [isVisible, setIsVisible] = useState(false);

  // Effect to show the popup when the component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    // Conditional rendering based on isVisible state
    isVisible && (
      <div>
        <div className="pl-10">
          <Filters hotels={hotels} onClose={onClose} />
        </div>
      </div>
    )
  );
};

export default Popup;
