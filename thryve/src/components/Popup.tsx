//import { useState } from "react";
//import React from 'react';
import { Button, Dialog, DialogPanel, DialogTitle, Description } from "@headlessui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function Popup({ isOpen, onClose }: Props){

  return (
    <>
      <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black bg-opacity-30">
          <DialogPanel className="bg-white rounded-lg p-6 max-w-md mx-auto">
            <div className="flex justify-end">
              <Button onClick={onClose} className="bg-blue-500 text-white px-2 py-1 rounded">X</Button>
            </div>
            <DialogTitle className="text-lg font-bold text-black">Title</DialogTitle>
            <Description className="text-black">This is a description</Description>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default Popup;
