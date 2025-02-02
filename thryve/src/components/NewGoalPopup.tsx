import { Button } from '@headlessui/react';
import { useState } from 'react';

// Define the types for the questionnaire data
interface Question {
  id: number;
  question: string;
  closeBtn?: boolean;
}

interface IProps {
    onClose: () => void;
}

const questionnaireData: Question[] = [
  { id: 1, question: "What is your new goal's category?" },
  { id: 2, question: "What is your new goal?" },
  { id: 3, question: "What is the timeline for the goal?" },
  { id: 4, question: "How many steps are you estimating to need?" },
  { id: 5, question: "What are the steps to achieve the goal?" },
];

const NewGoalPopup = ({onClose} : IProps) => {
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prevAnswers) => ({ ...prevAnswers, [questionId]: answer }));
  };

  const handleSubmit = () => {
    onClose();
    // return (
    //     <
    // );
  };

  return (
    <div className="text-lg text-black">
      <form>
        {questionnaireData.map((question) => (
          <div className="py-2" key={question.id}>
            <p>{question.question}</p>
            <input
              type="text"
              value={answers[question.id] || ""}
              onChange={(e) => handleAnswerChange(question.id, e.target.value)}
              placeholder="Your answer"
            />
          </div>
        ))}
      </form>
        <Button onClick={handleSubmit} className="px-3 py-1 mx-0.8 my-5 bg-black text-white rounded hover:bg-gray-800">
            Submit
        </Button>
    </div>
  );
};

export default NewGoalPopup;

