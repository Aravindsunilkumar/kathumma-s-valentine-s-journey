import { useMemo } from "react";

const confettiEmojis = ["🌹", "💖", "✨", "💕", "🎉", "💗", "🌸", "💝", "🥀", "💐"];

const CelebrationPage = () => {
  const confetti = useMemo(() =>
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      emoji: confettiEmojis[i % confettiEmojis.length],
      left: `${Math.random() * 100}%`,
      duration: `${3 + Math.random() * 4}s`,
      delay: `${Math.random() * 5}s`,
      size: `${1 + Math.random() * 1.5}rem`,
    })), []);

  const roses = useMemo(() =>
    Array.from({ length: 100 }, (_, i) => ({
      id: i,
      delay: `${(i * 0.03)}s`,
    })), []);

  return (
    <>
      {/* Confetti overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
        {confetti.map((c) => (
          <span
            key={c.id}
            className="confetti-particle"
            style={{
              "--left": c.left,
              "--duration": c.duration,
              "--delay": c.delay,
              "--size": c.size,
              left: c.left,
            } as React.CSSProperties}
          >
            {c.emoji}
          </span>
        ))}
      </div>

      <div className="glass-card rounded-3xl p-8 md:p-10 max-w-lg w-[90%] mx-auto text-center animate-slide-up">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          🎉 Yay! You made my day! 🎉
        </h2>

        <div className="my-6">
          <p className="font-display text-xl text-love-rose font-bold mb-4 animate-pulse-love">
            Here's a bouquet of 1000 roses for you! 🌹
          </p>
          <div className="max-h-40 overflow-hidden rounded-xl">
            {roses.map((r) => (
              <span
                key={r.id}
                className="animate-rose-bob text-2xl mx-0.5"
                style={{ animationDelay: r.delay }}
              >
                🌹
              </span>
            ))}
          </div>
        </div>

        <p className="text-primary-foreground/90 text-lg leading-relaxed mt-6 font-body">
          I'm so excited to spend Valentine's Day with you! Get ready for something special. ❤️
        </p>
        <p className="text-primary-foreground font-display text-xl italic mt-6 font-semibold">
          I love you, Kathumma! 💕
        </p>
      </div>
    </>
  );
};

export default CelebrationPage;
