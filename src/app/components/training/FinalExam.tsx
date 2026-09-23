"use client";

import { useEffect, useState } from "react";
import CyberButton from "../forms/CyberButton";
import {
  BigGreenCheckIcon,
  BigRedCrossIcon,
  LightModeIcon,
  RedCrossIcon,
} from "@/public/icons";
import ThemeInput from "@/src/app/components/forms/ThemeInput";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ThemeToggle from "../ui/ThemeToggle";

type Option = {
  id: string;
  text: string;
};

type Question = {
  id: number;
  question: string;
  options: Option[];
  correctAnswer: string;
};

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setDarkMode(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleAnswerSubmit = () => {
    if (selectedOption === "") return;

    if (questions[currentQuestion].correctAnswer === selectedOption) {
      setScore(score + 1);
    }
    setAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswerSubmitted(false);
      setSelectedOption("");
    } else {
      setShowResult(true);
    }
  };

  const [showCertificate, setShowCertificate] = useState(false);

  if (showCertificate)
    return (
      <div className="quiz-container px-12 py-12 dark:bg-gray-800">
        <h2 className="text-2xl text-gray-800 font-semibold text-center dark:text-white">
          Your certificate has been generated.
        </h2>
        <h3 className="text-lg text-gray-800 font-normal text-center dark:text-white">
          You may now download/print your certificate.
        </h3>

        <div className="flex justify-center items-center gap-8 mt-5 flex-col w-full">
          <Image
            width={400}
            height={400}
            alt="certificate"
            src="/images/certificateWithMedicalCard.png"
          ></Image>
          <CyberButton onClick={() => router.push("/")} paddings="px-5 py-2.5">
            Download/Print Certificate
          </CyberButton>
        </div>
      </div>
    );

  return (
    <div className="quiz-container dark:bg-gray-800">
      {!showResult ? (
        <div>
          <div className="bg-gray-100  px-8 py-3 dark:bg-gray-800 flex items-center justify-between dark:border-t-gray-800 border-t">
            <h2 className="text-2xl font-semibold dark:text-white">
              Final Exam
            </h2>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-medium mt-1 dark:text-white">
                {currentQuestion + 1} of {questions.length}
              </h3>
              <ThemeToggle />
            </div>
          </div>
          <div className="p-8">
            <h2 className="text-lg font-medium dark:text-white text-black mb-4">
              {questions[currentQuestion].question}
            </h2>
            <div className="options-list">
              {questions[currentQuestion].options.map((option) => (
                <label
                  className={`
                    flex gap-4 mb-2 py-3 text-base font-normal px-4 rounded-md  
                    ${
                      selectedOption === option.id
                        ? "bg-gray-200 dark:bg-gray-600"
                        : ""
                    }
                    ${
                      !answerSubmitted
                        ? "hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer group"
                        : ""
                    }
                    ${
                      answerSubmitted &&
                      selectedOption === option.id &&
                      option.id === questions[currentQuestion].correctAnswer
                        ? "bg-green-100 dark:bg-transparent dark:border-green-500 dark:border"
                        : ""
                    }
                    ${
                      answerSubmitted &&
                      selectedOption === option.id &&
                      option.id !== questions[currentQuestion].correctAnswer
                        ? "bg-red-100 dark:border-red-500 dark:border dark:bg-transparent"
                        : ""
                    }
                    
                  `}
                  key={option.id}
                >
                  <input
                    className={` appearance-none h-6 w-6   rounded-full cursor-pointer border-[6px]! shrink-0 ${
                      !answerSubmitted ? "hover:accent-primary border-gray-200" : "dark:border-white border-gray-200"
                    } ${
                      answerSubmitted &&
                      selectedOption === option.id &&
                      option.id === questions[currentQuestion].correctAnswer
                        ? "checked:border-green-500 border-green-500 accent-green-500 "
                        : answerSubmitted && selectedOption === option.id
                          ? "checked:border-red-500 border-red-500 accent-red-500"
                          : "group-hover:border-primary checked:border-primary"
                    } `}
                    type="radio"
                    id={option.id}
                    name="option"
                    value={option.id}
                    checked={selectedOption === option.id}
                    onChange={(e) =>
                      !answerSubmitted && setSelectedOption(e.target.value)
                    }
                    disabled={answerSubmitted}
                  />
                  <span className="cursor-pointer dark:text-gray-50">
                    {option.id}. {option.text}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 dark:bg-gray-900 px-8 py-3 flex justify-between items-center dark:border-t-gray-900 border-t">
            <div>
              {answerSubmitted ? (
                questions[currentQuestion].correctAnswer === selectedOption ? (
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <h2 className="text-green-500">Correct</h2>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <RedCrossIcon />
                    <h2 className="text-red-500">
                      Sorry. The correct answer was{" "}
                      <span className="font-medium">
                        {questions[currentQuestion].correctAnswer}
                      </span>
                    </h2>
                  </div>
                )
              ) : (
                ""
              )}
            </div>
            {answerSubmitted ? (
              <CyberButton onClick={handleNextQuestion} paddings="px-5 py-1.5">
                {currentQuestion + 1 < questions.length
                  ? "Next"
                  : "See Results"}
              </CyberButton>
            ) : (
              <CyberButton
                onClick={handleAnswerSubmit}
                paddings="px-5 py-1.5"
                disabled={!selectedOption}
              >
                Submit
              </CyberButton>
            )}
          </div>
        </div>
      ) : (
        <div className="px-12 py-12 text-center justify-center flex flex-col items-center">
          {(score / questions.length) * 100 > 80 ? (
            <BigGreenCheckIcon />
          ) : (
            <BigRedCrossIcon />
          )}
          <h2
            className={`md:text-4xl my-4 lg:text-[40px] font-semibold ${
              (score / questions.length) * 100 > 80
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {(score / questions.length) * 100 > 80
              ? "Congratulations!"
              : "Sorry!"}
          </h2>

          <div className="mb-8">
            <span className="text-lg mb-2 block text-slate-800 font-normal dark:text-white text-center">
              Exam Score:
            </span>
            <div className="grid grid-cols-[120px_120px_120px] h-20 gap-5">
              <div className="bg-gray-100  rounded-lg p-5 h-full w-full w-100">
                <h2 className="text-xl font-semibold text-slate-800">
                  {score}
                </h2>
                <span className="text-base font-medium text-slate-700">
                  Correct
                </span>
              </div>
              <div className="bg-gray-100  rounded-lg p-5 h-full w-full w-100">
                <h2 className="text-xl font-semibold text-slate-800">
                  {questions.length - score}
                </h2>
                <span className="text-base font-medium text-slate-700">
                  Incorrect
                </span>
              </div>
              <div
                className={` rounded-lg p-5 h-full w-full w-100 ${
                  (score / questions.length) * 100 > 80
                    ? "bg-green-50"
                    : "bg-red-50"
                }`}
              >
                <h2 className="text-xl font-semibold text-slate-800">
                  {(score / questions.length) * 100}%
                </h2>
                <span className="text-base font-medium text-slate-700">
                  Score
                </span>
              </div>
            </div>
          </div>
          {(score / questions.length) * 100 > 80 ? (
            <div className="w-full flex flex-col gap-4">
              <ThemeInput
                name="name"
                label="Enter your name as you want to appear on your Certificate"
                placeholder="Enter name"
                required
                type="text"
                value=""
                id="name"
                error={false}
                errorMessage="Name is Required"
              ></ThemeInput>

              <ThemeInput
                name="email"
                label="and email a copy to me at:"
                placeholder="Email Address"
                required
                type="email"
                value=""
                id="email"
                error={false}
                errorMessage="Name is Required"
              ></ThemeInput>
              <div className="justify-center flex">
                <CyberButton
                  onClick={() => setShowCertificate(true)}
                  paddings="px-5 py-2.5"
                >
                  Generate Certificate
                </CyberButton>
              </div>
            </div>
          ) : (
            <>
              <p className="text-lg mb-3 text-slate-800 dark:text-white">
                Sorry, but you will need a
                <span className="font-semibold"> 80%</span> or above score to
                receive your certificate of Completion.
              </p>

              <p className="text-lg mb-3 text-slate-800 dark:text-white">
                Please review the material and then you can take the final exam
                again as many times as you need to pass or until you are
                satisfied with your score.
              </p>

              <CyberButton
                onClick={() => {
                  setCurrentQuestion(0);
                  setScore(0);
                  setSelectedOption("");
                  setShowResult(false);
                  setAnswerSubmitted(false);
                }}
                paddings="px-5 py-2.5 bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600"
              >
                Back to Training
              </CyberButton>
            </>
          )}
        </div>
      )}
    </div>
  );
};

const questions: Question[] = [
  {
    id: 1,
    question:
      "Which of the following is an action you might perform that would NOT benefit a hacker?",
    options: [
      { id: "A", text: "Clicking on a link" },
      { id: "B", text: "Updating your software to the latest security update" },
      { id: "C", text: "Downloading an attachment" },
      { id: "D", text: "Inadvertently providing your login credentials" },
    ],
    correctAnswer: "B",
  },
  {
    id: 2,
    question: "What is the safest way to manage your passwords?",
    options: [
      { id: "A", text: "Using the same password for all accounts" },
      { id: "B", text: "Writing passwords on a notepad" },
      { id: "C", text: "Using a password manager" },
      { id: "D", text: "Sharing passwords via email" },
    ],
    correctAnswer: "B",
  },
];

export default Quiz;
