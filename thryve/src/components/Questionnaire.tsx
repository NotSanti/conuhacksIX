import { useState } from "react";
import { Button } from "@headlessui/react";
import { FaRegCommentDots } from 'react-icons/fa';
import Popup from "./Popup";
import questions from '../questionnaire.json';
import "../Animation.css"

interface Question {
  id: number;
  questionText: string;
  options: string[];
}

function Questionnaire() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  // const [isSubmitted, setSubmitted] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleSelectChange = (questionId: number, value: string) => {
    setAnswers((prevAnswers) => ({ 
      ...prevAnswers, 
      [questionId]: value 
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // <div>{answers}</div>
    setIsPopupOpen(false);
  };

  const questionnaireContent = (
      <div className="">
        <form onSubmit={handleSubmit}>
          {questions.map((question: Question) => (
            <div key={question.id} className="mb-4">
              <label className="block text-lg mb-2 text-black">{question.questionText}</label>
              <select
                value={answers[question.id] || ''}
                onChange={(e) => handleSelectChange(question.id, e.target.value)}
                className="border border-gray-300 rounded p-2 w-full"
                >
                  <option value="" disabled>Select an answer</option>
                  {question.options.map((option: string, index: number) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
            </div>
          ))}
          <Button type="submit" className="border border-red-500 hover:cursor-pointer bg-amber-500 rounded p-2 active:bg-amber-700">
            Submit
          </Button>
        </form>
      </div>
    );

  return (
    <>
      <Button
        onClick={handleOpenPopup}
      >
        <FaRegCommentDots className="text-4xl text-4xl"/>
      </Button>
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title="Questionnaire" content={questionnaireContent}/>
    </>
  );
}

export default Questionnaire;
