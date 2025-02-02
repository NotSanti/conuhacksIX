import { useState } from "react";
import { Button } from "@headlessui/react";
import Popup from "./Popup";
import "../Animation.css";
import { GoGoal } from "react-icons/go";
import NewGoalPopup from "./NewGoalPopup";


function AddGoal() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {

    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <Button onClick={handleOpenPopup}>
        <GoGoal className="text-4xl tilt-animation" />
      </Button>
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title={"Add New Goal"}
        submitForm
      />
    </>
  );
}

export default AddGoal;
