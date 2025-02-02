import "./App.css";
import { useState } from "react";
import Achievements from "./components/Achievements";
import Questionnaire from "./components/Questionnaire";
import Roadmap from "./components/Roadmap";

function App() {
  const [blob, setBlob] = useState<Blob | null>(null);
  return (
    <div className="w-full h-full">
      <div className="flex w-full justify-center items-center text-3xl font-bold">
        THRYVE
      </div>
        <Questionnaire setBlob={setBlob}/>
      <div className="flex flex-col">
        <div className="w-full  h-[90vh]">
          <Roadmap />
        </div>
        <div className="self-end pr-4">
          <Achievements blob={blob}/>
        </div>
      </div>
    </div>
  );
}

export default App;
