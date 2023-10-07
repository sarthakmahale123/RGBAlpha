'use client'

import { SetStateAction, useEffect, useState } from "react";
import "@/styles/quiz.css";
import { Button } from "@/components/ui/button";

const Quizpage = () => {

    


const jsonData = `[
    {
      "Question": "A bar of mass M = 1.00 kg and length L = 0.20 m is lying on a horizontal frictionless surface...",
      "A": "w = 6.98 rad/s and v = 4.30 m/s",
      "B": "w = 3.75 rad/s and v = 4.30 m/s",
      "C": "w = 3.75 rad/s and v = 10.0 m/s",
      "D": "w = 6.80 rad/s and v = 4.10 m/s",
      "Correct Option": "A",
      "Difficulty": "Difficult"
    },
    {
      "Question": "In an experiment for determination of the focal length of a thin convex lens...",
      "A": 7,
      "B": 5,
      "C": 3,
      "D": 1,
      "Correct Option": "D",
      "Difficulty": "Difficult"
    },
    {
      "Question": "Two satellites P and Q are moving in different circular orbits around the Earth...",
      "A": "3R/5",
      "B": "R/6",
      "C": "6R/5",
      "D": "5R/6",
      "Correct Option": "A",
      "Difficulty": "Mod-Diff"
    },
    {
      "Question": "A person of height 1.6 m is walking away from a lamp post of height 4 m along a straight path...",
      "A": 10,
      "B": 40,
      "C": 70,
      "D": 100,
      "Correct Option": "B",
      "Difficulty": "Mod-Diff"
    },
    {
      "Question": "A Hydrogen-like atom has atomic number Z. Photons emitted in the electronic transitions...",
      "A": 8,
      "B": 4,
      "C": 3,
      "D": 12,
      "Correct Option": "C",
      "Difficulty": "Medium"
    },
    {
      "Question": "A Carnot engine operating between two reservoirs has efficiency 1/3...",
      "A": "16.5 K",
      "B": "33 K",
      "C": "66 K",
      "D": "62K",
      "Correct Option": "D",
      "Difficulty": "Medium"
    },
    {
      "Question": "In an amplitude modulation, a modulating signal having amplitude of X V is superimposed...",
      "A": "01:02",
      "B": "01:01",
      "C": "02:01",
      "D": "04:01",
      "Correct Option": "C",
      "Difficulty": "Mod-Easy"
    },
    {
      "Question": "An electron of a hydrogen like atom, having Z = 4, jumps from 4th energy state to 2nd energy state...",
      "A": "13.6 eV",
      "B": "10.5 eV",
      "C": "3.4 eV",
      "D": "40.8 eV",
      "Correct Option": "D",
      "Difficulty": "Mod-Easy"
    },
    {
      "Question": "For a body projected at an angle with the horizontal from the ground, choose the correct statement.",
      "A": "Gravitational potential energy is maximum at the highest point.",
      "B": "The horizontal component of velocity is zero at the highest point",
      "C": "The vertical component of momentum is maximum at the highest point.",
      "D": "The kinetic energy (K.E.) is zero at the highest point of projectile motion.",
      "Correct Option": "A",
      "Difficulty": "Easy"
    },
    {
      "Question": "A coil is placed in magnetic field such that plane of coil is perpendicular to the direction of magnetic field...",
      "A": "A and B only",
      "B": "A, B and C only",
      "C": "A, B and D only",
      "D": "A and C only",
      "Correct Option": "B",
      "Difficulty": "Easy"
    }
  ]
  `;

  const jsonDataMaths = `[
    {
      "Question": "Find the derivative of f(x) = 3x^2 - 5x + 2.",
      "A": "f'(x) = 6x - 5",
      "B": "f'(x) = 3x^2 - 5x",
      "C": "f'(x) = 6x - 2",
      "D": "f'(x) = 3x^2 - 5",
      "Correct Option": "A",
      "Difficulty": "Difficult"
    },
    {
      "Question": "What is the integral of sin(x) with respect to x?",
      "A": "∫sin(x) dx = cos(x) + C",
      "B": "∫sin(x) dx = -cos(x) + C",
      "C": "∫sin(x) dx = sin(x) + C",
      "D": "∫sin(x) dx = -sin(x) + C",
      "Correct Option": "A",
      "Difficulty": "Difficult"
    },
    {
      "Question": "Solve the equation: 2x + 3 = 7.",
      "A": "x = 2",
      "B": "x = 3",
      "C": "x = 4",
      "D": "x = 5",
      "Correct Option": "A",
      "Difficulty": "Mod-Diff"
    },
    {
      "Question": "Calculate the area of a rectangle with length 8 units and width 5 units.",
      "A": "Area = 13 square units",
      "B": "Area = 35 square units",
      "C": "Area = 40 square units",
      "D": "Area = 15 square units",
      "Correct Option": "B",
      "Difficulty": "Mod-Diff"
    },
    {
      "Question": "Solve the equation: 3x - 2 = 4x + 5.",
      "A": "x = -7",
      "B": "x = -3",
      "C": "x = 7",
      "D": "x = 3",
      "Correct Option": "A",
      "Difficulty": "Medium"
    },
    {
      "Question": "What is the value of π (pi) to three decimal places?",
      "A": "π ≈ 3.141",
      "B": "π ≈ 3.142",
      "C": "π ≈ 3.143",
      "D": "π ≈ 3.140",
      "Correct Option": "B",
      "Difficulty": "Medium"
    },
    {
      "Question": "Simplify the expression: 2(3x - 4) + 5(2x + 1).",
      "A": "Simplified = 13x - 3",
      "B": "Simplified = 12x - 3",
      "C": "Simplified = 14x - 2",
      "D": "Simplified = 11x - 2",
      "Correct Option": "C",
      "Difficulty": "Mod-Easy"
    },
    {
      "Question": "Calculate the square root of 144.",
      "A": "√144 = 12",
      "B": "√144 = 14",
      "C": "√144 = 10",
      "D": "√144 = 16",
      "Correct Option": "A",
      "Difficulty": "Mod-Easy"
    },
    {
      "Question": "Which of the following is a prime number?",
      "A": "7",
      "B": "12",
      "C": "15",
      "D": "10",
      "Correct Option": "A",
      "Difficulty": "Easy"
    },
    {
      "Question": "What is the value of 2^3?",
      "A": "2^3 = 8",
      "B": "2^3 = 6",
      "C": "2^3 = 4",
      "D": "2^3 = 10",
      "Correct Option": "A",
      "Difficulty": "Easy"
    }
  ]`;

  const jsonDataChemistry = `[
    {
      "Question": "What is the chemical symbol for oxygen?",
      "A": "O2",
      "B": "O3",
      "C": "O",
      "D": "O+",
      "Correct Option": "C",
      "Difficulty": "Difficult"
    },
    {
      "Question": "How many elements are there in the periodic table?",
      "A": "92",
      "B": "118",
      "C": "108",
      "D": "120",
      "Correct Option": "B",
      "Difficulty": "Difficult"
    },
    {
      "Question": "What is the chemical formula for water?",
      "A": "H2O2",
      "B": "H3O",
      "C": "H2O",
      "D": "HO2",
      "Correct Option": "C",
      "Difficulty": "Mod-Diff"
    },
    {
      "Question": "Which gas makes up the majority of Earth's atmosphere?",
      "A": "Oxygen (O2)",
      "B": "Carbon dioxide (CO2)",
      "C": "Nitrogen (N2)",
      "D": "Hydrogen (H2)",
      "Correct Option": "C",
      "Difficulty": "Mod-Diff"
    },
    {
      "Question": "What is the chemical symbol for gold?",
      "A": "Go",
      "B": "Au",
      "C": "Ag",
      "D": "Ge",
      "Correct Option": "B",
      "Difficulty": "Medium"
    },
    {
      "Question": "What is the process by which plants make their own food using sunlight?",
      "A": "Photosynthesis",
      "B": "Respiration",
      "C": "Fermentation",
      "D": "Oxidation",
      "Correct Option": "A",
      "Difficulty": "Medium"
    },
    {
      "Question": "Which element is essential for all known forms of life?",
      "A": "Carbon (C)",
      "B": "Sodium (Na)",
      "C": "Chlorine (Cl)",
      "D": "Fluorine (F)",
      "Correct Option": "A",
      "Difficulty": "Mod-Easy"
    },
    {
      "Question": "What is the chemical symbol for hydrogen?",
      "A": "H2",
      "B": "He",
      "C": "H",
      "D": "Hy",
      "Correct Option": "C",
      "Difficulty": "Mod-Easy"
    },
    {
      "Question": "Which gas is known as laughing gas?",
      "A": "Methane (CH4)",
      "B": "Nitrous oxide (N2O)",
      "C": "Carbon monoxide (CO)",
      "D": "Sulfur dioxide (SO2)",
      "Correct Option": "B",
      "Difficulty": "Easy"
    },
    {
      "Question": "What is the chemical formula for methane?",
      "A": "CH4",
      "B": "C2H6",
      "C": "CO2",
      "D": "H2O",
      "Correct Option": "A",
      "Difficulty": "Easy"
    }
  ]`;



const rand_data = [jsonData,jsonDataMaths,jsonDataChemistry]




    const dummyData = JSON.parse(jsonData);



    

    const [isSelected,setIsSelected] = useState('');

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [showResult, setShowResult] = useState(false);
  
    const currentQuestion = dummyData[currentQuestionIndex];
  
    const [timer, setTimer] = useState(60); // Initial timer value in seconds
  
    useEffect(() => {
      let countdown: any;
  
      if (!showResult && timer > 0) {
        countdown = setInterval(() => {
          setTimer((prevTimer) => prevTimer - 1);
        }, 1000);
      } else if (timer === 0) {
        handleNextClick(); // Move to the next question when the timer runs out
      }
  
      return () => clearInterval(countdown);
    }, [showResult, timer]);
  
    useEffect(() => {
      if (timer === 0) {
        handleNextClick(); // Move to the next question when the timer runs out
      }
    }, [timer]);
  
    const handleAnswerClick = (optionIndex:any) => {
      setSelectedOptionIndex(optionIndex);
    };
  
    const handleNextClick = () => {
      if (selectedOptionIndex === null) {
        return; // Do not proceed to the next question if no option is selected
      }
  
      const selectedOption = Object.keys(currentQuestion)[selectedOptionIndex];
      const correctOption = currentQuestion["Correct Option"];
  
      if (selectedOption === correctOption) {
        setScore(score + 1);
      }
  
      if (currentQuestionIndex === dummyData.length - 1) {
        setShowResult(true);
      } else {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedOptionIndex(null); // Reset the selected option for the next question
        setTimer(60); // Reset the timer when moving to the next question
      }
    };
  
    const resetQuiz = () => {
      setCurrentQuestionIndex(0);
      setScore(0);
      setShowResult(false);
      setSelectedOptionIndex(null);
      setTimer(60); // Reset the timer when restarting the quiz
    };
  
    const prevQuestion = () => {
      if (currentQuestionIndex > 0) {
        setCurrentQuestionIndex(currentQuestionIndex - 1);
        setSelectedOptionIndex(null); // Reset the selected option when going back to the previous question
        setTimer(60); // Reset the timer when going back to the previous question
      }
    };
  
    const submitQuiz = () => {
      setShowResult(true);
    };
    return ( 
        <div className="quiz-container rounded-xl border-b-gray-500">
      {showResult ? (
        <div className="quiz-result flex flex-col items-center justify-center gap-2 ">
          <h1>Quiz Result</h1>
          <p>
            Your score: {score} out of {dummyData.length}
          </p>
          <Button onClick={resetQuiz} className="restart-button">
            Restart  New Quiz
          </Button>
        </div>
      ) : (
        <div className="quiz-question">
          <h1>Quiz Question {currentQuestionIndex + 1}</h1>
          <p>{currentQuestion.Question}</p>
          <p>Time left: {timer} seconds</p>
          <ul className="options-list">
            {Object.keys(currentQuestion)
              .filter((key) => key.match(/[A-D]/)) // Filter out options A, B, C, and D
              .map((key, index) => {
                if (key === "Correct Option" || key === "Difficulty") {
                  return null; // Hide "Correct Option" and "Difficulty" columns
                }
                return (
                  <li
                    key={key}
                    onClick={() => handleAnswerClick(index)}
                    className={`option-item ${
                      selectedOptionIndex === index ? "selected" : ""
                    }`}
                  >
                    {`${key}: ${currentQuestion[key]}`}
                  </li>
                );
              })}
          </ul>
          <div className="button-container">
            <button onClick={prevQuestion} className="prev-button">
              Previous Question
            </button>
            <button onClick={handleNextClick} className="next-button">
              {currentQuestionIndex === dummyData.length - 1
                ? "Submit Quiz"
                : "Next Question"}
            </button>
          </div>
        </div>
      )}
    </div>
     );
}


 
export default Quizpage;