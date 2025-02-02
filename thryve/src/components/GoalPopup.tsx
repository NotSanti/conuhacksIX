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
    const [stepsLeft, setStepsLeft] = useState<number>(goalStepsLeft);
    const [stepsFilled, setStepsFilled] = useState<number>(goalSteps);

    // Function to add one step when button is clicked
    const addStep = () => {
        setStepsLeft(stepsLeft + 1);
        }
    
    const fillStep = () => {
        setStepsFilled(stepsFilled + 1);
        setStepsLeft(stepsLeft - 1);
        }

    return (
        <div className="text-lg font-bold text-black">
            {goalTitle}
            <div className="flex flex-wrap">
                {stepsFilled > 0 &&
                    Array.from({ length: stepsFilled }).map((_, index) => (
                    <RiFootprintFill key={index} className="size-6 mx-0.5" />
                ))}

                {stepsLeft > 0 &&
                    Array.from({ length: stepsLeft }).map((_, index) => (
                    <button onClick={fillStep}>
                        <RiFootprintLine key={index} className="size-6 mx-0.5" />
                    </button>
                ))}
            </div>
            <button onClick={addStep} className="mt-2 px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                +
            </button>
          </div>
        )
}

export default GoalPopup;