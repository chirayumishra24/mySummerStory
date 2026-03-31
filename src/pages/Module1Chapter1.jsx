import React from 'react';
import AnimatedCard from '../components/AnimatedCard';
import BouncyTitle from '../components/BouncyTitle';
import WavyDivider from '../components/WavyDivider';
import FullscreenButton from '../components/FullscreenButton';

const imgPrefix = 'https://login.skillizee.io';

export default function Module1Chapter1() {
  return (
    <div className="chapter-layout">
      <FullscreenButton />
      <div className="title-badge animate-float">Module 1: Explore & Create</div>
      
      <AnimatedCard style={{ width: '100%' }}>
        <BouncyTitle text="Chapter 1: Recall" />
        <p style={{ textAlign: 'center', fontWeight: '600', fontSize: '1.15rem' }}>
          Students reflect on their summer experiences and express them through speaking, creativity, and storytelling.
        </p>
      </AnimatedCard>

      <WavyDivider color1="#FFD93D" color2="#FF6B6B" />

      <div className="video-container">
        <iframe 
          src="https://www.youtube.com/embed/wy398w9QcB4?start=0&end=78" 
          title="Past Tense - How was your summer vacation" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <WavyDivider color1="#4D96FF" color2="#6BCB77" />

      <AnimatedCard style={{ width: '100%' }} delay={0.2}>
        <h2 style={{ color: '#FF6B6B', fontSize: '1.8rem' }}>Activity: Memory Spark ⚡</h2>
        <div className="grid-2">
          <div>
            <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#FF8C42' }}>Guiding questions:</p>
            <ul>
              <li>Where did you go during summer?</li>
              <li>What was the most fun thing you did?</li>
              <li>Did you try something new?</li>
            </ul>
          </div>
          <div>
            <img 
              src={`${imgPrefix}/s/articles/69cb451faf1f3e9ce079482a/images/image-20260331092304-1.png`} 
              alt="Memory Spark Illustration" 
              className="activity-image"
            />
          </div>
        </div>
      </AnimatedCard>
    </div>
  );
}
