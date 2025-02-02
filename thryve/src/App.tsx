import "./App.css";
import Achievements from "./components/Achievements";
import Roadmap from "./components/Roadmap";

function App() {
  return (
    <div className="w-full h-full">
      <div className="flex w-full justify-center items-center text-3xl font-bold">
        THRYVE
      </div>
      <div className="flex flex-col">
        <div className="w-full  h-[90vh]">
          <Roadmap />
        </div>
        <div className="self-end pr-4">
          <Achievements />
        </div>
      </div>
    </div>
  );
}

export default App;
