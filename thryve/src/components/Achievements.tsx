import { useState } from "react";
import { Button } from "@headlessui/react";
import { FaTrophy } from "react-icons/fa";
import Popup from "./Popup";
import "../Animation.css";
import AchievementList from "./AchievementList";

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
        <AchievementList
          isCompleted={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
          tooltips={[
            "Romance",
            "Reach Health Goal",
            "Make New Friends",
            "Grow Personally",
            "Earn Money",
            "Graduate from University",
            "Travel",
            "Get New Job",
            "Become a Star",
          ]}
        />
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
