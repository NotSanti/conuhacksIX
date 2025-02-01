//import { useState } from "react";
//import React from 'react';
import { Button, Dialog, DialogPanel, DialogTitle, Description } from "@headlessui/react";
import "../Animation.css"

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  content?: React.ReactNode;
}

function Popup({ isOpen, onClose, title, description, content}: Props){

  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="overlay">
        <div className="fixed inset-0">
          <DialogPanel className="bg-white rounded-lg p-6 max-w-md mx-auto relative">
            <div className="flex justify-between items-center">
              {title && <DialogTitle className="text-lg font-bold text-black">{title}</DialogTitle>}
              <div className="flex justify-end">
                <Button onClick={onClose} className="text-black">X</Button>
              </div>
            </div>
            {description && <Description className="text-black mt-4">{description}</Description>}
            {content && <div className="mt-4">{content}</div>}
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default Popup;
