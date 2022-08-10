import React from "react";
import { useSelector } from "react-redux";
const Steps = ({ updateCurrentStep }) => {
  const step = useSelector((state) => state.step.current);

  const activeClass = "bg-gray-100 border-blue-500 text-blue-500";
  return (
    <div className="flex mx-auto flex-wrap mb-6">
      <a
        className={`${step === 1 && activeClass} step`}
        onClick={() => updateCurrentStep(1)}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5 mr-3"
          viewBox="0 0 24 24"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
        STEP 1
      </a>
      <a
        className={`${step === 2 && activeClass} step`}
        onClick={() => updateCurrentStep(2)}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5 mr-3"
          viewBox="0 0 24 24"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
        STEP 2
      </a>
      <a
        className={`${step === 3 && activeClass} step`}
        onClick={() => updateCurrentStep(3)}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5 mr-3"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="5" r="3"></circle>
          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
        </svg>
        STEP 3
      </a>
      <a
        className={`${step === 4 && activeClass} step`}
        onClick={() => updateCurrentStep(4)}
      >
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5 mr-3"
          viewBox="0 0 24 24"
        >
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        STEP 4
      </a>
    </div>
  );
};

export default Steps;
