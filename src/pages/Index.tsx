import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import QuizSection from "@/components/QuizSection";
import ValentineProposal from "@/components/ValentineProposal";
import CelebrationPage from "@/components/CelebrationPage";

type Stage = "quiz" | "proposal" | "celebration";

const Index = () => {
  const [stage, setStage] = useState<Stage>("quiz");

  return (
    <div className="min-h-screen bg-love-gradient flex items-center justify-center relative overflow-hidden">
      <FloatingHearts />
      <MusicPlayer />

      <div className="relative z-10 w-full py-8">
        {stage === "quiz" && <QuizSection onComplete={() => setStage("proposal")} />}
        {stage === "proposal" && <ValentineProposal onYes={() => setStage("celebration")} />}
        {stage === "celebration" && <CelebrationPage />}
      </div>
    </div>
  );
};

export default Index;
