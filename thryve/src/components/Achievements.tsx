import { useState } from "react";
import { Button } from "@headlessui/react";
import { FaTrophy } from "react-icons/fa";
import Popup from "./Popup";
import "../Animation.css";
import AchievementList from "./AchievementList";

// interface AchievementProps {
//   blob?: Blob | null;
// }

// function Achievements( { blob }: AchievementProps ) {
function Achievements() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [description, setDescription] = useState<string | null>(null);

  const handleOpenPopup = () => {
    // if (blob) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     setDescription(reader.result as string);
    //   };
    //   reader.readAsText(blob);
    // }
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
