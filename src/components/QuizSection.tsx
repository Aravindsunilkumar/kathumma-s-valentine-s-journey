import { useState } from "react";

interface QuizSectionProps {
  onComplete: () => void;
}

const QuizSection = ({ onComplete }: QuizSectionProps) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [q1Answered, setQ1Answered] = useState(false);
  const [q1Error, setQ1Error] = useState(false);
  const [q2Value, setQ2Value] = useState("");
  const [q2Error, setQ2Error] = useState(false);
  const [q2Correct, setQ2Correct] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const handleQ1 = (answer: string) => {
    if (answer === "yes") {
      setQ1Answered(true);
      setQ1Error(false);
      setTimeout(() => {
        setTransitioning(true);
        setTimeout(() => {
          setStep(2);
          setTransitioning(false);
        }, 400);
      }, 800);
    } else {
      setQ1Error(true);
      setTimeout(() => setQ1Error(false), 2000);
    }
  };

  const handleQ2 = () => {
    if (q2Value.trim().toLowerCase() === "daivam") {
      setQ2Correct(true);
      setQ2Error(false);
      setTimeout(() => {
        setTransitioning(true);
        setTimeout(() => onComplete(), 400);
      }, 800);
    } else {
      setQ2Error(true);
      setTimeout(() => setQ2Error(false), 2000);
    }
  };

  return (
    <div className={`glass-card rounded-3xl p-8 md:p-10 max-w-lg w-[90%] mx-auto text-center transition-all duration-400 ${transitioning ? "opacity-0 scale-95" : "animate-slide-up"}`}>
      {/* Progress */}
      <div className="flex justify-center gap-3 mb-6">
        <div className={`h-2 w-16 rounded-full transition-colors duration-300 ${step >= 1 ? "bg-love-pink" : "bg-primary-foreground/20"}`} />
        <div className={`h-2 w-16 rounded-full transition-colors duration-300 ${step >= 2 ? "bg-love-pink" : "bg-primary-foreground/20"}`} />
      </div>

      {step === 1 && (
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            💕 Before We Continue... 💕
          </h1>
          <p className="text-primary-foreground/70 mb-6 font-body">Answer correctly to continue!</p>

          <div className="bg-primary-foreground/10 rounded-2xl p-6">
            <h3 className="text-primary-foreground font-display text-lg font-semibold mb-1 flex items-center justify-center gap-2">
              Question 1
              {q1Answered && <span className="animate-pop-in text-green-300 text-xl">✓</span>}
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-4 font-body">
              Is our anniversary on the 8th of October?
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => handleQ1("yes")}
                disabled={q1Answered}
                className={`px-8 py-3 rounded-full font-bold font-body transition-all duration-300 ${
                  q1Answered
                    ? "bg-gradient-to-r from-green-400 to-emerald-400 text-primary-foreground scale-105"
                    : "bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 hover:scale-105"
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => handleQ1("no")}
                disabled={q1Answered}
                className="px-8 py-3 rounded-full font-bold font-body bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30 hover:scale-105 transition-all duration-300 disabled:opacity-50"
              >
                No
              </button>
            </div>
            {q1Error && (
              <p className="text-red-300 mt-4 animate-shake font-body">Oops! Try again 💭</p>
            )}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
            💕 Great! One More... 💕
          </h1>
          <p className="text-primary-foreground/70 mb-6 font-body">Almost there!</p>

          <div className="bg-primary-foreground/10 rounded-2xl p-6">
            <h3 className="text-primary-foreground font-display text-lg font-semibold mb-1 flex items-center justify-center gap-2">
              Question 2
              {q2Correct && <span className="animate-pop-in text-green-300 text-xl">✓</span>}
            </h3>
            <p className="text-primary-foreground/90 text-lg mb-4 font-body">
              What was your first reply message in WhatsApp?
            </p>
            <input
              type="text"
              value={q2Value}
              onChange={(e) => setQ2Value(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleQ2()}
              placeholder="Type your answer here..."
              disabled={q2Correct}
              className={`w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border-2 font-body text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none transition-all duration-300 ${
                q2Correct ? "border-green-400 bg-green-400/20" : "border-primary-foreground/20 focus:border-primary-foreground/50"
              }`}
            />
            <button
              onClick={handleQ2}
              disabled={q2Correct || !q2Value.trim()}
              className="mt-4 px-8 py-3 rounded-full font-bold font-body bg-gradient-to-r from-love-purple to-love-pink text-primary-foreground hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 shadow-lg"
            >
              Check Answer
            </button>
            {q2Error && (
              <p className="text-red-300 mt-4 animate-shake font-body">Not quite right. Think carefully... 💭</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizSection;
