import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 80, 
    scale: 0.9,
    rotate: -2,
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      stiffness: 150,
      damping: 15,
      mass: 0.8,
    },
  },
};

export default function AnimatedCard({ children, className = '', style = {}, delay = 0 }) {
  return (
    <motion.div
      className={`candy-card ${className}`}
      style={style}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
        transition: { duration: 0.3 }
      }}
    >
      {children}
    </motion.div>
  );
}
