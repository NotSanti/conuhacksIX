import { useState } from "react";
import { Button } from "@headlessui/react";
// import { FaRegCommentDots } from 'react-icons/fa';
import Popup from "./Popup";
import questions from '../questionnaire.json';
import "../Animation.css"

interface Question {
  id: number;
  questionText: string;
  options: string[];
}

function Questionnaire() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

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
    const unansweredQuestions = questions.filter((question: Question) => !answers[question.id]);
    if (unansweredQuestions.length > 0) {
      setErrorMessage('Please answer all questions before submitting.');
      setIsPopupOpen(true);
      return;
    }
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
                    <option key={index} value={option} className="text-black">
                      {option}
                    </option>
                  ))}
                </select>
            </div>
          ))}
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <Button type="submit" className="border border-red-500 hover:cursor-pointer bg-amber-500 rounded p-2 active:bg-amber-700">
            Submit
          </Button>
        </form>
      </div>
    );

  return (
    <>
      {/* <Button
        onClick={handleOpenPopup}
      >
        <FaRegCommentDots className="text-4xl text-4xl"/>
      </Button> */}
      <Popup isOpen={isPopupOpen} onClose={handleClosePopup} title="Questionnaire" content={questionnaireContent} closeBtn={false}/>
    </>
  );
}

export default Questionnaire;
