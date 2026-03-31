import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const PARTICLE_EMOJIS = ['☀️', '⭐', '🌊', '🐚', '🏖️', '🌴', '🍦', '🦋', '🌺', '🐠', '✨', '🎈'];

export default function FloatingParticles({ count = 18 }) {
  const particles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      emoji: PARTICLE_EMOJIS[i % PARTICLE_EMOJIS.length],
      left: Math.random() * 100,
      size: 18 + Math.random() * 22,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 6,
      xDrift: -30 + Math.random() * 60,
    }));
  }, [count]);

  return (
    <div className="floating-particles">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
          }}
          animate={{
            y: ['-10vh', '110vh'],
            x: [0, p.xDrift, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear',
          }}
        >
          {p.emoji}
        </motion.span>
      ))}
    </div>
  );
}
