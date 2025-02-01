//import { useState } from "react";
//import React from 'react';
import { Button, Dialog, DialogPanel, DialogTitle, Description } from "@headlessui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

function Popup({ isOpen, onClose, title, description }: Props){

  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black bg-opacity-30">
          <DialogPanel className="bg-white rounded-lg p-6 max-w-md mx-auto relative">
            <div className="flex justify-between items-center">
              <DialogTitle className="text-lg font-bold text-black">{title}</DialogTitle>
              <div className="flex justify-end">
                <Button onClick={onClose} className="text-black">X</Button>
              </div>
            </div>
            <Description className="text-black mt-4">{description}</Description>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default Popup;
