import photo1 from "@/assets/photo1.jpeg";
import photo2 from "@/assets/photo2.jpeg";
import photo3 from "@/assets/photo3.jpeg";
import photo4 from "@/assets/photo4.jpeg";
import photo5 from "@/assets/photo5.jpeg";

const photos = [photo1, photo2, photo3, photo4, photo5];

interface Props {
  noCount: number;
  noBtnSize: number;
  onYes: () => void;
  onNo: () => void;
}

const TimeLoopModal = ({ noCount, noBtnSize, onYes, onNo }: Props) => {
  const currentPhoto = photos[(noCount - 1) % photos.length];

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 overflow-y-auto">
      <div className="text-center max-w-md animate-modal-pop my-auto">
        <p className="animate-blink-glow text-love-rose font-display text-2xl md:text-3xl font-bold mb-4">
          ⏰ TIME LOOP ACTIVATED ⏰
        </p>
        <p className="text-primary-foreground/60 text-sm mb-4 font-body">
          Attempt #{noCount} — You can't escape love!
        </p>
        <img
          src={currentPhoto}
          alt="Our Memory"
          className="w-[80%] max-w-[400px] mx-auto rounded-2xl border-4 border-love-rose mb-6 animate-image-pulse object-cover aspect-[3/4]"
        />
        <p className="text-primary-foreground font-display text-xl mb-6">
          Will you be my Valentine? 🌹
        </p>
        <div className="flex gap-6 justify-center items-center">
          <button
            onClick={onYes}
            className="px-10 py-3 rounded-full font-bold font-body bg-gradient-to-r from-green-500 to-emerald-400 text-primary-foreground hover:scale-110 transition-all duration-300 shadow-lg"
          >
            Yes! 💖
          </button>
          {noBtnSize > 0.25 && (
            <button
              onClick={onNo}
              style={{ transform: `scale(${noBtnSize})` }}
              className="px-10 py-3 rounded-full font-bold font-body bg-gradient-to-r from-love-rose to-red-400 text-primary-foreground hover:scale-110 transition-all duration-300"
            >
              No
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLoopModal;
