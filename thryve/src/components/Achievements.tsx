import { useState } from "react";
import { Button } from "@headlessui/react";
import { FaTrophy } from 'react-icons/fa';
import Popup from "./Popup";
import "../Animation.css"

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

  return (
    <>
      <Button
        onClick={handleOpenPopup}
      >
        <FaTrophy className="text-4xl tilt-animation"/>
      </Button>

      <Popup 
        isOpen={isPopupOpen} 
        onClose={handleClosePopup} 
        title={"Achievements"} 
        // description={description || "No achievements to display"}
        closeBtn={true}/>
    </>
  );
}

export default Achievements;
