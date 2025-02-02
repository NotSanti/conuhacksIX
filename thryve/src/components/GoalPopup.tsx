import { useState } from 'react';
import { RiFootprintFill } from "react-icons/ri";
import { RiFootprintLine } from "react-icons/ri";

interface GoalProps {
    goalTitle?: string;
    goaldDescription?: string;
    goalSteps: number;
    goalStepsLeft: number;
}

function GoalPopup({goalTitle, goalSteps, goalStepsLeft} : GoalProps){
    return (
        <div className="text-lg font-bold text-black">
            {goalTitle}
            <div className="flex flex-wrap">
                {goalSteps > 0 &&
                    Array.from({ length: goalSteps }).map((_, index) => (
                    <RiFootprintFill key={index} className="size-6 mx-0.5" />
                ))}

                {goalStepsLeft > 0 &&
                    Array.from({ length: goalStepsLeft }).map((_, index) => (
                    <RiFootprintLine key={index} className="size-6 mx-0.5" />
                ))}
            </div>
          </div>
        )
}

export default GoalPopup;