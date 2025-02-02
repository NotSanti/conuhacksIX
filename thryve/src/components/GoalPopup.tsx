import { useState } from 'react';
import { RiFootprintFill } from "react-icons/ri";
import { RiFootprintLine } from "react-icons/ri";

interface GoalProps {
    goalTitle?: string;
    goaldDescription?: string;
    goaldSteps?: string;
}

function GoalPopup({goalTitle} : GoalProps){
    return (
        <div className="text-lg font-bold text-black">
            {goalTitle}
            <RiFootprintFill className="size-16 ..."/>
            <RiFootprintLine className="size-16 ..."/>
        </div>)
}

export default GoalPopup;