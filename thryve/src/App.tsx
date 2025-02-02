//import { useState } from "react";

import "./App.css";
import { Button } from "@headlessui/react";
import Achievements from "./components/Achievements";
import Questionnaire from "./components/Questionnaire";
import Roadmap from "./components/Roadmap";
import Quote from './components/Quote.tsx'

function App() {
  return (
    <div className="w-full h-full">
      <div className="flex w-full justify-center items-center text-3xl font-bold">
        THRYVE
      </div>
      <div className="w-full flex justify-center items-center flex-col h-full">
        <Roadmap />
        <Achievements/>
        <Questionnaire/>
        
      </div>
      <div className="flex justify-center italic font-pacifico">
        <Quote></Quote>
      </div>
    </div>
  );
}

export default App;
