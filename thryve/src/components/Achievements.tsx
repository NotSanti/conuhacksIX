import { useState } from "react";
//import React from 'react';
import { Button } from "@headlessui/react";
import { FaTrophy } from 'react-icons/fa';

import Popup from "./Popup";

function Achievements() {
  
  // const onClick = () => {
  //   console.log("button pressed")
  // }
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <Button
        className={
          "border border-red-500 hover:cursor-pointer bg-amber-500 rounded p-2 active:bg-amber-700"
        }
        onClick={handleOpenPopup}
      >
        <FaTrophy/>
      </Button>
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </>
  );
}

export default Achievements;
