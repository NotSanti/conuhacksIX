import "./App.css";
import { useState } from "react";
import Achievements from "./components/Achievements";
import Questionnaire from "./components/Questionnaire";
import Roadmap from "./components/Roadmap";
import Quote from "./components/Quote.tsx";

function App() {
  const [blob, setBlob] = useState<Blob | null>(null);
  return (
    <div className="w-full h-full">
      <div className="flex w-full justify-center items-center text-3xl font-bold fade-container ">
        <img src="/logo.png" alt="THRYVE" className="h-40 absolute top-0" />
      </div>
      <div className="flex flex-col">
        <Questionnaire setBlob={setBlob} />
        <div className="w-full  h-[90vh]">
          <Roadmap />
        </div>
        <div className="flex w-full pr-4 items-center justify-center">
          <div className="flex justify-center italic font-pacifico  ">
            <Quote />
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
