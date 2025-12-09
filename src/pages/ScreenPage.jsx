import React, { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Eye, CheckCircle, ArrowRight, ArrowLeft, X, RotateCcw } from "lucide-react";
import back from "../assets/Orbit.jpg";

// Vision Acuity Test Component
function VisionAcuityTest({ onClose, onComplete }) {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [showWrongFeedback, setShowWrongFeedback] = useState(false);
  const [wrongAttempts, setWrongAttempts] = useState(0);
  
  const levels = [
    { size: "text-7xl", letters: "E", distance: "20/200", description: "Legally blind without correction" },
    { size: "text-6xl", letters: "F P", distance: "20/100", description: "Significant vision impairment" },
    { size: "text-5xl", letters: "T O Z", distance: "20/70", description: "Moderate vision impairment" },
    { size: "text-4xl", letters: "L P E D", distance: "20/50", description: "Mild vision impairment" },
    { size: "text-3xl", letters: "P E C F D", distance: "20/40", description: "Minimum for driving in most states" },
    { size: "text-2xl", letters: "E D F C Z P", distance: "20/30", description: "Near normal vision" },
    { size: "text-xl", letters: "F E L O P Z D", distance: "20/25", description: "Good vision" },
    { size: "text-lg", letters: "D E F P O T E C", distance: "20/20", description: "Normal vision" },
    { size: "text-base", letters: "L E F O D P C T", distance: "20/15", description: "Better than average" },
    { size: "text-sm", letters: "F D P L T C E O", distance: "20/13", description: "Excellent vision" },
    { size: "text-xs", letters: "P E Z O L C F T D", distance: "20/10", description: "Exceptional vision" },
  ];

  const handleSubmit = () => {
    // Get the current level letters without spaces for comparison
    const expectedLetters = levels[currentLevel].letters.replace(/\s/g, '');
    const isCorrect = userInput.toUpperCase().replace(/\s/g, '') === expectedLetters;
    
    if (isCorrect) {
      // Correct answer
      const newAnswers = [...answers, { level: currentLevel, correct: true, distance: levels[currentLevel].distance }];
      setAnswers(newAnswers);
      setShowWrongFeedback(false);
      setWrongAttempts(0);
      
      if (currentLevel < levels.length - 1) {
        // Move to next level
        setCurrentLevel(currentLevel + 1);
        setUserInput("");
      } else {
        // Completed all levels!
        onComplete({
          type: "vision",
          score: levels[currentLevel].distance,
          description: levels[currentLevel].description,
          details: newAnswers
        });
      }
    } else {
      // Wrong answer - show feedback
      setShowWrongFeedback(true);
      setWrongAttempts(prev => prev + 1);
    }
  };

  const handleTryAgain = () => {
    setUserInput("");
    setShowWrongFeedback(false);
  };

  const handleEndTest = () => {
    // End the test - use the last successfully read level as the score
    // If they failed the first level, score is "20/200+"
    let finalScore = "20/200+";
    let finalDescription = "Could not read the largest letter - please see an eye care professional";
    
    if (currentLevel > 0) {
      // Use the previous level (last one they got correct)
      const previousLevel = levels[currentLevel - 1];
      finalScore = previousLevel.distance;
      finalDescription = previousLevel.description;
    } else if (answers.length > 0 && answers[answers.length - 1].correct) {
      // They got the current level correct before failing
      finalScore = levels[currentLevel].distance;
      finalDescription = levels[currentLevel].description;
    }
    
    const newAnswers = [...answers, { level: currentLevel, correct: false, distance: levels[currentLevel].distance }];
    
    onComplete({
      type: "vision",
      score: finalScore,
      description: finalDescription,
      details: newAnswers
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full p-8 relative max-h-[95vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Vision Acuity Test</h2>
          <p className="text-blue-700/70">Type the letters from the highlighted row. Keep your screen at arm's length.</p>
          <div className="mt-2 text-sm text-gray-500">Level {currentLevel + 1} of {levels.length} • Target: {levels[currentLevel].distance}</div>
        </div>

        {/* Wrong Answer Feedback */}
        {showWrongFeedback && (
          <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 mb-6 text-center animate-pulse">
            <p className="text-red-700 font-medium mb-2">
              ❌ That's not quite right!
            </p>
            <p className="text-red-600 text-sm mb-3">
              The correct letters were: <span className="font-bold font-mono tracking-widest">{levels[currentLevel].letters.replace(/\s/g, '')}</span>
            </p>
            <p className="text-gray-600 text-sm mb-4">
              You entered: <span className="font-bold font-mono tracking-widest">{userInput || "(empty)"}</span>
            </p>
            <div className="flex gap-3 justify-center">
              <Button 
                onClick={handleTryAgain}
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                <RotateCcw className="w-4 h-4 mr-2" /> Try Again
              </Button>
              <Button 
                onClick={handleEndTest}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                End Test & See Results
              </Button>
            </div>
          </div>
        )}

        {/* Eye Chart Display - Snellen Style with Fade Effect */}
        <div className={`bg-gray-50 rounded-xl p-6 mb-6 border-2 ${showWrongFeedback ? 'border-red-200' : 'border-gray-200'}`}>
          <div className="flex flex-col items-center space-y-2">
            {levels.map((level, index) => {
              // Calculate opacity - current level and above are fully visible, below fade out
              let opacity = 1;
              if (index > currentLevel) {
                // Items below current level fade progressively
                opacity = Math.max(0.15, 1 - ((index - currentLevel) * 0.2));
              }
              
              // Highlight current level
              const isCurrentLevel = index === currentLevel;
              
              return (
                <div
                  key={index}
                  className={`flex items-center justify-between w-full max-w-2xl px-4 py-1 rounded-lg transition-all duration-300 ${
                    isCurrentLevel 
                      ? showWrongFeedback 
                        ? 'bg-red-100 border-2 border-red-400' 
                        : 'bg-blue-100 border-2 border-blue-400' 
                      : ''
                  }`}
                  style={{ opacity }}
                >
                  <span 
                    className={`${level.size} font-bold tracking-[0.3em] text-gray-900 font-mono ${
                      isCurrentLevel ? (showWrongFeedback ? 'text-red-900' : 'text-blue-900') : ''
                    }`}
                  >
                    {level.letters}
                  </span>
                  <span className={`text-sm font-medium ${isCurrentLevel ? (showWrongFeedback ? 'text-red-600' : 'text-blue-600') : 'text-gray-400'}`}>
                    {level.distance}
                  </span>
                </div>
              );
            })}
          </div>
          
          {/* Decorative lines like eye chart */}
          <div className="mt-4 space-y-1">
            <div className="h-0.5 w-full bg-green-500 rounded"></div>
            <div className="h-0.5 w-3/4 mx-auto bg-red-500 rounded"></div>
          </div>
        </div>

        {/* Input Section - Hidden when showing wrong feedback */}
        {!showWrongFeedback && (
          <>
            <div className="flex gap-4">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value.toUpperCase())}
                onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
                placeholder="Type the letters you see..."
                className="flex-1 px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-xl uppercase tracking-widest font-mono"
                autoFocus
              />
              <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Next <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <p className="text-xs text-gray-500 text-center mt-4">
              Read the highlighted row and type the letters without spaces. Press Enter to submit.
            </p>
          </>
        )}

        {/* Progress indicator */}
        <div className="mt-4">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentLevel) / levels.length) * 100}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 text-center mt-2">
            {currentLevel > 0 
              ? `Last correct: ${levels[currentLevel - 1].distance} - ${levels[currentLevel - 1].description}`
              : "Complete each level to measure your visual acuity"
            }
          </p>
        </div>
      </div>
    </div>
  );
}

// Symptom Checker Component
function SymptomChecker({ onClose, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    { id: 1, question: "Do you experience blurry vision?", category: "vision" },
    { id: 2, question: "Do you have frequent headaches, especially after reading?", category: "strain" },
    { id: 3, question: "Do you see floaters or flashes of light?", category: "retina" },
    { id: 4, question: "Do your eyes feel dry or irritated?", category: "dryness" },
    { id: 5, question: "Do you have difficulty seeing at night?", category: "night" },
    { id: 6, question: "Do you experience double vision?", category: "alignment" },
    { id: 7, question: "Are your eyes sensitive to light?", category: "sensitivity" },
    { id: 8, question: "Do you have red or bloodshot eyes frequently?", category: "irritation" },
    { id: 9, question: "Do you experience eye pain or discomfort?", category: "pain" },
    { id: 10, question: "Have you noticed any changes in your color vision?", category: "color" },
  ];

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, { ...questions[currentQuestion], answer }];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const yesCount = newAnswers.filter(a => a.answer === "yes").length;
      let severity = "low";
      let recommendation = "Your eyes appear to be healthy. Continue regular check-ups.";
      
      if (yesCount >= 7) {
        severity = "high";
        recommendation = "We strongly recommend scheduling an appointment with our eye care specialists as soon as possible.";
      } else if (yesCount >= 4) {
        severity = "medium";
        recommendation = "Some symptoms require attention. Please consider booking an eye examination.";
      }
      
      onComplete({
        type: "symptoms",
        severity,
        yesCount,
        totalQuestions: questions.length,
        recommendation,
        details: newAnswers
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Symptom Checker</h2>
          <p className="text-blue-700/70">Answer honestly about your eye health symptoms.</p>
          <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
          <div className="mt-2 text-sm text-gray-500">Question {currentQuestion + 1} of {questions.length}</div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8 mb-6 text-center">
          <p className="text-xl text-blue-900 font-medium">
            {questions[currentQuestion].question}
          </p>
        </div>

        <div className="flex gap-4 justify-center">
          <Button 
            onClick={() => handleAnswer("yes")} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg"
          >
            Yes
          </Button>
          <Button 
            onClick={() => handleAnswer("no")} 
            variant="outline"
            className="border-blue-300 text-blue-700 hover:bg-blue-50 px-12 py-6 text-lg"
          >
            No
          </Button>
        </div>
      </div>
    </div>
  );
}

// Color Vision Test Component
function ColorVisionTest({ onClose, onComplete }) {
  const [currentPlate, setCurrentPlate] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [userInput, setUserInput] = useState("");

  // Simulated Ishihara plates (in real app, would use actual images)
  const plates = [
    { number: "12", description: "Everyone should see 12", colors: "from-red-400 via-orange-300 to-green-400" },
    { number: "8", description: "Red-green deficiency may see 3", colors: "from-green-400 via-yellow-300 to-red-400" },
    { number: "6", description: "Color blind may not see number", colors: "from-orange-400 via-red-300 to-green-500" },
    { number: "29", description: "Deuteranopia may see 70", colors: "from-green-500 via-lime-300 to-orange-400" },
    { number: "57", description: "Protanopia may see 35", colors: "from-red-500 via-orange-400 to-green-400" },
    { number: "5", description: "Test for blue-yellow deficiency", colors: "from-blue-400 via-purple-300 to-yellow-400" },
  ];

  const handleSubmit = () => {
    const isCorrect = userInput === plates[currentPlate].number;
    const newAnswers = [...answers, { 
      plate: currentPlate + 1, 
      expected: plates[currentPlate].number,
      given: userInput,
      correct: isCorrect 
    }];
    setAnswers(newAnswers);
    
    if (currentPlate < plates.length - 1) {
      setCurrentPlate(currentPlate + 1);
      setUserInput("");
    } else {
      const correctCount = newAnswers.filter(a => a.correct).length;
      let result = "Normal Color Vision";
      let description = "Your color vision appears to be normal.";
      
      if (correctCount < 4) {
        result = "Possible Color Vision Deficiency";
        description = "You may have a color vision deficiency. We recommend a professional examination.";
      } else if (correctCount < 6) {
        result = "Mild Color Vision Variation";
        description = "Some results suggest minor color perception differences. Consider a professional check.";
      }
      
      onComplete({
        type: "color",
        correctCount,
        totalPlates: plates.length,
        result,
        description,
        details: newAnswers
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Color Vision Test</h2>
          <p className="text-blue-700/70">What number do you see in the circle?</p>
          <div className="mt-2 text-sm text-gray-500">Plate {currentPlate + 1} of {plates.length}</div>
        </div>

        <div className="flex justify-center mb-6">
          <div className={`w-64 h-64 rounded-full bg-gradient-to-br ${plates[currentPlate].colors} flex items-center justify-center relative overflow-hidden`}>
            {/* Simulated dot pattern */}
            <div className="absolute inset-0 opacity-60">
              {[...Array(200)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${Math.random() * 15 + 8}px`,
                    height: `${Math.random() * 15 + 8}px`,
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    backgroundColor: `hsl(${Math.random() * 60 + (currentPlate * 30)}, ${70 + Math.random() * 30}%, ${50 + Math.random() * 20}%)`,
                  }}
                />
              ))}
            </div>
            <span 
              className="text-6xl font-bold drop-shadow-lg z-10 mix-blend-overlay transition-opacity duration-500"
              style={{ 
                opacity: Math.max(0.35, 0.7 - (currentPlate * 0.07)),
                color: `rgba(255, 255, 255, ${Math.max(0.4, 0.8 - (currentPlate * 0.07))})`
              }}
            >
              {plates[currentPlate].number}
            </span>
          </div>
        </div>

        <div className="flex gap-4">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter the number you see..."
            className="flex-1 px-4 py-3 border border-blue-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-center text-xl"
            autoFocus
          />
          <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            Next <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// Results Component
function TestResults({ results, onClose, onRetake }) {
  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>
        
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-blue-900 mb-2">Test Complete!</h2>
        </div>

        {results.type === "vision" && (
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-xl p-6 text-center">
              <p className="text-sm text-blue-600 mb-1">Your Visual Acuity</p>
              <p className="text-4xl font-bold text-blue-900">{results.score}</p>
              <p className="text-sm text-blue-700 mt-2 font-medium">
                {results.description || (
                  results.score === "20/20" ? "Normal vision" :
                  results.score === "20/15" || results.score === "20/13" || results.score === "20/10" ? "Better than average vision" :
                  "Consider scheduling an eye exam"
                )}
              </p>
            </div>
            <div className="text-sm text-gray-600">
              <p className="font-medium mb-2">Understanding Snellen Chart Results:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>20/20</strong> - Normal vision (can see at 20 feet what most people see at 20 feet)</li>
                <li><strong>20/40</strong> - Minimum vision for driving in most states</li>
                <li><strong>20/70</strong> - May need glasses or contacts for daily activities</li>
                <li><strong>20/200</strong> - Legal blindness threshold (with best correction)</li>
                <li><strong>Lower numbers (20/15, 20/10)</strong> - Better than average vision</li>
              </ul>
              <p className="mt-3 text-blue-700 bg-blue-50 p-2 rounded">
                ⚠️ This is a screening tool for informational purposes. Please consult an eye care professional for an accurate diagnosis.
              </p>
            </div>
          </div>
        )}

        {results.type === "symptoms" && (
          <div className="space-y-6">
            {/* Results Summary Card */}
            <div className={`rounded-2xl p-6 text-center border-2 shadow-lg ${
              results.severity === "high" 
                ? 'bg-gradient-to-br from-red-50 to-red-100 border-red-200 shadow-red-100' 
                : results.severity === "medium" 
                ? 'bg-gradient-to-br from-amber-50 to-yellow-100 border-amber-200 shadow-amber-100' 
                : 'bg-gradient-to-br from-green-50 to-emerald-100 border-green-200 shadow-green-100'
            }`}>
              <div className="flex items-center justify-center mb-3">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  results.severity === "high" ? 'bg-red-100' :
                  results.severity === "medium" ? 'bg-amber-100' : 'bg-green-100'
                }`}>
                  {results.severity === "high" ? (
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.282 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  ) : results.severity === "medium" ? (
                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  )}
                </div>
              </div>
              <p className="text-sm mb-1 font-medium" style={{ 
                color: results.severity === "high" ? "#dc2626" :
                       results.severity === "medium" ? "#ca8a04" : "#16a34a"
              }}>Symptom Assessment Result</p>
              <p className="text-3xl font-bold mb-2" style={{
                color: results.severity === "high" ? "#991b1b" :
                       results.severity === "medium" ? "#854d0e" : "#166534"
              }}>
                {results.severity === "high" ? "Attention Needed" :
                 results.severity === "medium" ? "Review Recommended" : "Looking Good"}
              </p>
              <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border">
                <span className="text-sm font-medium text-gray-700">
                  You reported <span className="font-bold text-blue-600">{results.yesCount} symptoms</span> out of {results.totalQuestions}
                </span>
              </div>
            </div>

            {/* Symptoms List */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-blue-900 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Your Reported Symptoms
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {results.details.filter(item => item.answer === "yes").map((item, index) => (
                  <div 
                    key={item.id}
                    className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 animate-fade-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-red-900">{item.question}</p>
                      <div className="mt-1">
                        <Badge variant="outline" className="text-xs bg-white border-red-300 text-red-700">
                          {item.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* All Questions Summary */}
              <div className="bg-blue-50/50 border border-blue-200 rounded-xl p-4">
                <h4 className="text-sm font-medium text-blue-900 mb-2 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Full Assessment Summary
                </h4>
                <div className="space-y-2">
                  {results.details.map((item, index) => (
                    <div key={item.id} className="flex items-center justify-between text-sm">
                      <span className="text-gray-700 truncate max-w-[70%]">{item.question}</span>
                      <Badge 
                        className={`${item.answer === "yes" ? 'bg-red-100 text-red-700 border-red-300' : 'bg-green-100 text-green-700 border-green-300'}`}
                      >
                        {item.answer === "yes" ? "Yes" : "No"}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-5">
              <h4 className="text-sm font-bold text-blue-900 mb-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Recommendations
              </h4>
              <p className="text-sm text-blue-800 mb-3">{results.recommendation}</p>
              {results.severity === "high" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                  <p className="text-xs font-medium text-red-800 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.998-.833-2.732 0L4.282 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                    Immediate Action Recommended: Please schedule an appointment with our specialists.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {results.type === "color" && (
          <div className="space-y-6">
            <div className={`rounded-xl p-6 text-center ${
              results.correctCount === results.totalPlates ? "bg-green-50" : "bg-yellow-50"
            }`}>
              <p className="text-sm mb-1 text-blue-600">Color Vision Result</p>
              <p className="text-2xl font-bold text-blue-900">{results.result}</p>
              <p className="text-sm mt-2 text-gray-600">
                {results.correctCount} of {results.totalPlates} plates identified correctly
              </p>
            </div>
            <div className="bg-blue-50 rounded-xl p-4">
              <p className="text-blue-800 text-sm">{results.description}</p>
            </div>
          </div>
        )}

        <div className="flex gap-4 mt-8">
          <Button onClick={onRetake} variant="outline" className="flex-1 border-blue-300 text-blue-700 hover:bg-blue-50">
            <RotateCcw className="w-4 h-4 mr-2" /> Retake Test
          </Button>
          <Button asChild className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg">
            <Link to="/appointment">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Book Appointment
            </Link>
          </Button>
        </div>

        <p className="text-xs text-gray-500 text-center mt-6">
          This screening is for informational purposes only and is not a medical diagnosis.
        </p>
      </div>
    </div>
  );
}

export default function ScreenPage() {
  const [activeTest, setActiveTest] = useState(null); // 'vision', 'symptoms', 'color'
  const [testResults, setTestResults] = useState(null);

  const handleTestComplete = (results) => {
    setActiveTest(null);
    setTestResults(results);
  };

  const handleCloseResults = () => {
    setTestResults(null);
  };

  const handleRetake = () => {
    const testType = testResults.type;
    setTestResults(null);
    setActiveTest(testType === "vision" ? "vision" : testType === "symptoms" ? "symptoms" : "color");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: `url(${back})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="inline-block animate-fade-in">
            <Badge
              variant="secondary"
              className="backdrop-blur-md bg-white/20 border border-white/30 text-white px-5 py-1.5 text-sm font-semibold shadow-lg"
            >
              Self Assessment
            </Badge>
          </div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white drop-shadow-lg animate-slide-up">
            Screen <span className="text-blue-400">Yourself</span>
          </h1>

          <p className="text-lg lg:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow animate-fade-in-delay">
            Take a quick eye health assessment from the comfort of your home. 
            Our screening tool helps identify potential vision issues and guides you 
            on whether you should visit an eye care professional.
          </p>
        </div>

        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse -z-10"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000 -z-10"></div>
      </section>

      {/* Main Content Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#DFF3FF] via-blue-50 to-[#E6F7FF]"></div>
        
        {/* Floating Bubbles */}
        <div className="absolute top-10 left-[5%] animate-float"><div className="w-4 h-4 rounded-full bg-blue-400/20"></div></div>
        <div className="absolute top-20 left-[15%] animate-float-delayed"><div className="w-6 h-6 rounded-full bg-cyan-400/20"></div></div>
        <div className="absolute top-32 left-[25%] animate-float-slow"><div className="w-3 h-3 rounded-full bg-blue-300/30"></div></div>
        <div className="absolute top-16 right-[10%] animate-float"><div className="w-8 h-8 rounded-full bg-blue-400/15"></div></div>
        <div className="absolute top-40 right-[20%] animate-float-delayed"><div className="w-5 h-5 rounded-full bg-blue-500/25"></div></div>
        <div className="absolute top-60 right-[5%] animate-float-slow"><div className="w-4 h-4 rounded-full bg-cyan-500/20"></div></div>
        <div className="absolute bottom-20 left-[8%] animate-float-delayed"><div className="w-7 h-7 rounded-full bg-blue-400/20"></div></div>
        <div className="absolute bottom-40 left-[18%] animate-float"><div className="w-3 h-3 rounded-full bg-blue-500/30"></div></div>
        <div className="absolute bottom-32 left-[30%] animate-float-slow"><div className="w-5 h-5 rounded-full bg-blue-500/20"></div></div>
        <div className="absolute bottom-16 right-[12%] animate-float"><div className="w-6 h-6 rounded-full bg-cyan-300/25"></div></div>
        <div className="absolute bottom-48 right-[25%] animate-float-delayed"><div className="w-4 h-4 rounded-full bg-blue-500/20"></div></div>
        <div className="absolute bottom-60 right-[8%] animate-float-slow"><div className="w-8 h-8 rounded-full bg-blue-400/15"></div></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Vision Test Card - Redesigned */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl shadow-blue-100/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border-2 border-white/50 overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-300/10 rounded-full translate-y-20 -translate-x-20 group-hover:scale-125 transition-transform duration-700 delay-100"></div>
              
              {/* Icon Container */}
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="relative text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-800 transition-colors">Vision Acuity Test</h3>
              <p className="relative text-blue-700/80 mb-6 leading-relaxed">
                Test your visual sharpness with our online eye chart. Check how well you can see at different distances.
              </p>
              
              {/* Features List */}
              <ul className="relative space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-blue-700">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-blue-500" />
                  </div>
                  <span>Takes only 5 minutes</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-blue-700">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-blue-500" />
                  </div>
                  <span>No special equipment needed</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-blue-700">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-blue-500" />
                  </div>
                  <span>Instant detailed results</span>
                </li>
              </ul>
              
              {/* Button */}
              <Button 
                onClick={() => setActiveTest("vision")}
                className="relative w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-200 group-hover:shadow-xl group-hover:shadow-blue-300 transition-all duration-300"
              >
                <Eye className="w-4 h-4 mr-2" />
                Start Vision Test
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Corner Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200">
                  Quick Test
                </Badge>
              </div>
            </div>

            {/* Symptom Checker Card - Redesigned */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl shadow-blue-100/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border-2 border-white/50 overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-300/10 rounded-full translate-y-20 -translate-x-20 group-hover:scale-125 transition-transform duration-700 delay-100"></div>
              
              {/* Icon Container */}
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="relative text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-800 transition-colors">Symptom Checker</h3>
              <p className="relative text-blue-700/80 mb-6 leading-relaxed">
                Answer a few questions about your eye health symptoms to get personalized recommendations.
              </p>
              
              {/* Features List */}
              <ul className="relative space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-blue-700">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-blue-500" />
                  </div>
                  <span>Personalized assessment</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-blue-700">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-blue-500" />
                  </div>
                  <span>Expert recommendations</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-blue-700">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-blue-500" />
                  </div>
                  <span>Detailed symptom report</span>
                </li>
              </ul>
              
              {/* Button */}
              <Button 
                onClick={() => setActiveTest("symptoms")}
                className="relative w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-200 group-hover:shadow-xl group-hover:shadow-blue-300 transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Check Symptoms
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Corner Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200">
                  Detailed
                </Badge>
              </div>
            </div>

            {/* Color Vision Test Card - Redesigned */}
            <div className="group relative bg-gradient-to-br from-white to-blue-50/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl shadow-blue-100/50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 border-2 border-white/50 overflow-hidden">
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-300/10 rounded-full translate-y-20 -translate-x-20 group-hover:scale-125 transition-transform duration-700 delay-100"></div>
              
              {/* Icon Container */}
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
              </div>
              
              <h3 className="relative text-2xl font-bold text-blue-900 mb-4 group-hover:text-blue-800 transition-colors">Color Vision Test</h3>
              <p className="relative text-blue-700/80 mb-6 leading-relaxed">
                Check your ability to distinguish colors with our Ishihara-style color blindness screening test.
              </p>
              
              {/* Features List */}
              <ul className="relative space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm text-blue-700">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-blue-500" />
                  </div>
                  <span>Quick and easy</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-blue-700">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-blue-500" />
                  </div>
                  <span>Color deficiency detection</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-blue-700">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-blue-500" />
                  </div>
                  <span>Comprehensive report</span>
                </li>
              </ul>
              
              {/* Button */}
              <Button 
                onClick={() => setActiveTest("color")}
                className="relative w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-200 group-hover:shadow-xl group-hover:shadow-blue-300 transition-all duration-300"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                Take Color Test
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              {/* Corner Badge */}
              <div className="absolute top-4 right-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200">
                  Fun & Interactive
                </Badge>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-yellow-50/90 backdrop-blur-sm border border-yellow-200 rounded-xl p-6">
              <p className="text-sm text-yellow-800 text-center">
                <strong>Disclaimer:</strong> These screening tools are for informational purposes only and are not a substitute 
                for a comprehensive eye examination by a qualified eye care professional. If you have concerns about your 
                vision or eye health, please schedule an appointment with our clinic.
              </p>
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes float-delayed {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-15px) rotate(-5deg); }
          }
          @keyframes float-slow {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-25px) rotate(8deg); }
          }
          @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          .animate-float-delayed { animation: float-delayed 8s ease-in-out infinite 1s; }
          .animate-float-slow { animation: float-slow 10s ease-in-out infinite 0.5s; }
          .animate-fade-in {
            animation: fade-in 0.3s ease-out forwards;
          }
        `}</style>
      </section>

      <Footer />

      {/* Test Modals */}
      {activeTest === "vision" && (
        <VisionAcuityTest 
          onClose={() => setActiveTest(null)} 
          onComplete={handleTestComplete}
        />
      )}
      {activeTest === "symptoms" && (
        <SymptomChecker 
          onClose={() => setActiveTest(null)} 
          onComplete={handleTestComplete}
        />
      )}
      {activeTest === "color" && (
        <ColorVisionTest 
          onClose={() => setActiveTest(null)} 
          onComplete={handleTestComplete}
        />
      )}

      {/* Results Modal */}
      {testResults && (
        <TestResults 
          results={testResults} 
          onClose={handleCloseResults}
          onRetake={handleRetake}
        />
      )}
    </div>
  );
}