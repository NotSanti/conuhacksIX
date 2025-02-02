import { useState } from "react";
import { Button } from "@headlessui/react";
import { FaTrophy } from "react-icons/fa";
import Popup from "./Popup";
import "../Animation.css";

function Achievements() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const renderAchievements = () => {
    return (
      <div className="text-black flex flex-col">
        <div className="flex"></div>
      </div>
    );
  };

  return (
    <>
      <Button onClick={handleOpenPopup}>
        <FaTrophy className="text-4xl tilt-animation" />
      </Button>
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title={"Achievements"}
        content={renderAchievements()}
      />
    </>
  );
}

export default Achievements;
