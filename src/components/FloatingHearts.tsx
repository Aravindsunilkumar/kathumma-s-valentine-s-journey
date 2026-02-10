import { useMemo } from "react";

const emojis = ["💕", "✨", "💖", "🌸", "💗", "🌹", "💝", "✨"];

const FloatingHearts = () => {
  const particles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      left: `${Math.random() * 100}%`,
      duration: `${6 + Math.random() * 8}s`,
      delay: `${Math.random() * 10}s`,
      size: `${1 + Math.random() * 1.5}rem`,
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.id}
          className="floating-particle"
          style={{
            "--left": p.left,
            "--duration": p.duration,
            "--delay": p.delay,
            "--size": p.size,
            left: p.left,
          } as React.CSSProperties}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
