import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letterVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.5 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 12,
    },
  },
};

const colors = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#FF6EC7', '#FF8C42', '#845EC2'];

export default function BouncyTitle({ text, className = '', style = {} }) {
  const letters = text.split('');

  return (
    <motion.h1
      className={`bouncy-title ${className}`}
      style={style}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          style={{
            display: letter === ' ' ? 'inline' : 'inline-block',
            color: colors[index % colors.length],
          }}
          whileHover={{ scale: 1.3, rotate: [-5, 5, 0], transition: { duration: 0.3 } }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
}
