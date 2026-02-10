import { useState } from "react";
import TimeLoopModal from "./TimeLoopModal";

interface Props {
  onYes: () => void;
}

const ValentineProposal = ({ onYes }: Props) => {
  const [noCount, setNoCount] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [noBtnSize, setNoBtnSize] = useState(1);

  const handleNo = () => {
    const newCount = noCount + 1;
    setNoCount(newCount);
    setNoBtnSize(Math.max(0.3, 1 - newCount * 0.15));
    setShowModal(true);
  };

  const handleModalNo = () => {
    const newCount = noCount + 1;
    setNoCount(newCount);
    setNoBtnSize(Math.max(0.2, 1 - newCount * 0.15));
  };

  const handleYes = () => {
    setShowModal(false);
    onYes();
  };

  return (
    <>
      <div className="glass-card rounded-3xl p-8 md:p-10 max-w-lg w-[90%] mx-auto text-center animate-slide-up">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6 animate-pulse-love">
          💕 Hey Kathumma! 💕
        </h1>
        <p className="text-primary-foreground/90 text-lg leading-relaxed mb-6 font-body">
          Valentine's Day is coming up, and I've been thinking about how lucky I am to have you in my life.
          Your smile brightens my days, and every moment with you is special.
        </p>
        <p className="font-display text-2xl font-bold text-primary-foreground mb-8">
          Will you be my Valentine? 🌹
        </p>
        <div className="flex gap-4 justify-center items-center">
          <button
            onClick={handleYes}
            className="px-8 py-3 rounded-full font-bold font-body bg-gradient-to-r from-love-purple to-love-pink text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg"
          >
            Yes! 💖
          </button>
          <button
            onClick={handleNo}
            style={{ transform: `scale(${noBtnSize})` }}
            className="px-8 py-3 rounded-full font-bold font-body bg-primary-foreground/20 text-primary-foreground/70 hover:bg-primary-foreground/30 transition-all duration-300"
          >
            No
          </button>
        </div>
      </div>

      {showModal && (
        <TimeLoopModal
          noCount={noCount}
          noBtnSize={noBtnSize}
          onYes={handleYes}
          onNo={handleModalNo}
        />
      )}
    </>
  );
};

export default ValentineProposal;
