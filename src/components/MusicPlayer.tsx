import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const tryPlay = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = 0.3;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // autoplay blocked, wait for interaction
        });
      }
    };

    tryPlay();
    const handler = () => tryPlay();
    document.addEventListener("click", handler, { once: true });
    return () => document.removeEventListener("click", handler);
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (!isPlaying) {
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/background-music.mp3" loop preload="auto" />
      <button
        onClick={toggleMute}
        className="fixed top-4 right-4 z-50 glass-card rounded-full p-3 transition-transform duration-200 hover:scale-110"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 text-primary-foreground" />
        ) : (
          <Volume2 className="w-5 h-5 text-primary-foreground" />
        )}
      </button>
    </>
  );
};

export default MusicPlayer;
