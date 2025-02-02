  import {
    Button,
    Dialog,
    DialogPanel,
    DialogTitle,
    Description,
  } from "@headlessui/react";
  import "../Animation.css";
  import { MdClose } from "react-icons/md";
import NewGoalPopup from "./NewGoalPopup";

  interface Props {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    content?: React.ReactNode;
    closeBtn?: boolean;
    submitForm?: boolean;
  }

  function Popup({
    isOpen,
    onClose,
    title,
    description,
    content,
    closeBtn = true,
    submitForm
  }: Props) {
    return (
      <>
        <Dialog open={isOpen} onClose={onClose} className="overlay">
          <div className="fixed inset-0 flex w-full h-full justify-center items-center">
            <DialogPanel className="bg-white rounded-lg p-6 max-w-md mx-auto relative min-w-[20rem]">
              <div className="flex justify-between items-center">
                {title && (
                  <DialogTitle className="text-lg font-bold text-black">
                    {title}
                  </DialogTitle>
                )}
                {closeBtn && (
                  <div className="flex justify-end">
                    <Button onClick={onClose} className="text-black">
                      <MdClose className="text-2xl" />
                    </Button>
                  </div>
                )}
              </div>
              {description && (
                <Description className="text-black mt-4">
                  {description}
                </Description>
              )}
              {content && <div className="mt-4">{content}</div>}
              {submitForm && <NewGoalPopup onClose={onClose}/>}
            </DialogPanel>
          </div>
        </Dialog>
      </>
    );
  }

  export default Popup;
