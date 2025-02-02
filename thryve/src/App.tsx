import "./App.css";
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
      <div className="flex flex-col">
      <Questionnaire/>
        <div className="w-full  h-[90vh]">
          <Roadmap />
        </div>
        <div className="self-end pr-4">
          <Achievements />
        </div>
        <div className="flex justify-center italic font-pacifico">
          <Quote></Quote>
        </div>
      </div>
    </div>
  );
}

export default App;
