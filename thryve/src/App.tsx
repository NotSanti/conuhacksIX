import { useState } from "react";

import "./App.css";
import { Button } from "@headlessui/react";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className="w-full h-full">
      <div className="flex w-full justify-center items-center text-3xl font-bold">
        THRYVE
      </div>
      <div className="w-full flex justify-center items-center flex-col h-full">
        <Roadmap />
      </div>
    </div>
  );
}

export default App;
