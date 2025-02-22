import { useState } from "react";
import { Button } from "@headlessui/react";
// import { FaRegCommentDots } from 'react-icons/fa';
import Popup from "./Popup";
// import { saveAs } from 'file-saver';
import questions from "../questionnaire.json";
import "../Animation.css";

interface Question {
  id: number;
  questionText: string;
  options: string[];
}

interface QuestionnaireProps {
  setBlob: (blob: Blob) => void;
}

function Questionnaire({ setBlob }: QuestionnaireProps) {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSelectChange = (questionId: number, value: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: value,
    }));
  };

  const validatedQuestions = questions.filter(
    (question: Question) => !answers[question.id]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const unansweredQuestions = questions.filter(
      (question: Question) => !answers[question.id]
    );
    if (unansweredQuestions.length > 0) {
      setErrorMessage("Please answer all questions before submitting.");
      setIsPopupOpen(true);
      return;
    }
    setIsPopupOpen(false);
  };

  const createBlob = () => {
    if (validatedQuestions.length > 0) return;
    const answersArray = Object.entries(answers).map(
      ([questionId, answer]) => ({
        questionId,
        answer,
      })
    );
    const newBlob = new Blob([JSON.stringify(answersArray, null, 2)], {
      type: "application/json",
    });
    setBlob(newBlob);
  };

  const questionnaireContent = (
    <div className="">
      <form onSubmit={handleSubmit}>
        {questions.map((question: Question) => (
          <div key={question.id} className="mb-4">
            <label className="block text-lg mb-2 text-black">
              {question.questionText}
            </label>
            <select
              value={answers[question.id] || ""}
              onChange={(e) => handleSelectChange(question.id, e.target.value)}
              className="border border-gray-300 rounded p-2 w-full text-black"
            >
              <option value="" disabled>
                Select an answer
              </option>
              {question.options.map((option: string, index: number) => (
                <option key={index} value={option} className="text-black">
                  {option}
                </option>
              ))}
            </select>
          </div>
        ))}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <Button
          type="submit"
          onClick={createBlob}
          className="border  hover:cursor-pointer bg-[#f7c42a] rounded p-2 hover:bg-[#826819]"
        >
          Save
        </Button>
      </form>
    </div>
  );

  return (
    <>
      <Popup
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        title="Questionnaire"
        content={questionnaireContent}
        closeBtn={false}
      />
    </>
  );
}

export default Questionnaire;
