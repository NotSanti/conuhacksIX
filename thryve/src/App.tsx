import "./App.css";
import { useEffect, useState } from "react";
import Achievements from "./components/Achievements";
import Questionnaire from "./components/Questionnaire";
import Roadmap from "./components/Roadmap";
import Quote from "./components/Quote.tsx";
import AddGoal from "./components/AddGoal.tsx";

function App() {
  const [submittedForm, setSubmittedForm] = useState<Blob | null>(null);
  const [isNewGoalCreated, setIsNewGoalCreated] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [showRoadmap, setShowRoadmap] = useState(false);

  useEffect(() => {
    if (submittedForm) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
        setShowRoadmap(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submittedForm]);

  return (
    <div className="w-full h-full">
      <div className="flex w-full justify-center items-center text-3xl font-bold fade-container ">
        <img src="/logo.png" alt="THRYVE" className="h-60 absolute top-0" />
      </div>
      <div className="flex flex-col">
        <Questionnaire setBlob={setSubmittedForm} />
        <div className="w-full  h-[90vh]">
          {showRoadmap ? (
            <Roadmap showNewGoal={isNewGoalCreated} />
          ) : (
            submittedForm &&
            isLoading && (
              <div className="loader absolute top-[50%] left-[46%]"></div>
            )
          )}
        </div>
        <div className="flex w-full pr-4 items-center justify-center">
          <div className="flex justify-center italic font-pacifico  ">
            <Quote />
          </div>
          <div className="absolute left-4 fade-container ">
            <AddGoal
              setIsNewGoalCreated={() => {
                setIsNewGoalCreated(!isNewGoalCreated);
              }}
            />
          </div>
          <div className="absolute right-4 fade-container ">
            <Achievements />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
