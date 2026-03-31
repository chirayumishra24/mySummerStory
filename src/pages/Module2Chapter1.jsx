import React from 'react';
import AnimatedCard from '../components/AnimatedCard';
import BouncyTitle from '../components/BouncyTitle';
import WavyDivider from '../components/WavyDivider';
import FullscreenButton from '../components/FullscreenButton';

const imgPrefix = 'https://login.skillizee.io';

export default function Module2Chapter1() {
  return (
    <div className="chapter-layout">
      <FullscreenButton />
      <div className="title-badge animate-float" style={{ background: '#FF6EC7' }}>Module 2: Express & Reflect</div>
      
      <AnimatedCard style={{ width: '100%' }}>
        <BouncyTitle text="Chapter 1: Show & Tell" />
      </AnimatedCard>

      <img 
        src={`${imgPrefix}/s/articles/69cb451faf1f3e9ce079482a/images/image-20260331092304-5.png`} 
        alt="Show and Tell Banner" 
        style={{ width: '100%', maxWidth: '300px', borderRadius: '16px', border: '5px solid #222', boxShadow: '6px 6px 0 #FFD93D' }}
      />

      <WavyDivider color1="#FF8C42" color2="#FFD93D" />

      <div className="video-container">
        <iframe 
          src="https://www.youtube.com/embed/NZYno_VQbpw" 
          title="My Family Summer Trip" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>

      <WavyDivider color1="#4D96FF" color2="#FF6EC7" />

      <AnimatedCard style={{ width: '100%' }} delay={0.2}>
        <h2 style={{ color: '#FF8C42', fontSize: '1.8rem' }}>Activity: My Summer Spotlight 🎤</h2>
        
        <p style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Presentation (10–15 mins):</p>
        <p>Each student comes forward and shares:</p>
        <ul>
          <li>Their drawing</li>
          <li>A short story (3–4 sentences)</li>
        </ul>

        <WavyDivider color1="#FFD93D" color2="#6BCB77" />

        <h3 style={{ color: '#845EC2', marginTop: '15px' }}>Audience Task 👂</h3>
        <div className="prompt-bubble">
          Other students listen and ask <strong>1 simple question</strong><br />
          <em>(e.g., "Who went with you?")</em>
        </div>
      </AnimatedCard>
    </div>
  );
}
