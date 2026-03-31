import React from 'react';
import AnimatedCard from '../components/AnimatedCard';
import BouncyTitle from '../components/BouncyTitle';
import WavyDivider from '../components/WavyDivider';
import FullscreenButton from '../components/FullscreenButton';

const imgPrefix = 'https://login.skillizee.io';

export default function Module1Chapter2() {
  return (
    <div className="chapter-layout">
      <FullscreenButton />
      <div className="title-badge animate-float">Module 1: Explore & Create</div>
      
      <AnimatedCard style={{ width: '100%' }}>
        <BouncyTitle text="Chapter 2: Create Your Summer Story" />
      </AnimatedCard>

      <WavyDivider color1="#FF6EC7" color2="#845EC2" />

      <div className="video-container" style={{ maxWidth: '400px' }}>
        <iframe 
          src="https://www.youtube.com/embed/J-GEE61srkw" 
          title="Summer Shorts" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          style={{ aspectRatio: '9 / 16' }}
        ></iframe>
      </div>

      <WavyDivider color1="#6BCB77" color2="#FFD93D" />

      <AnimatedCard style={{ width: '100%' }} delay={0.2}>
        <h2 style={{ color: '#4D96FF', fontSize: '1.8rem' }}>Activity: Draw & Describe 🎨</h2>
        
        <p style={{ fontWeight: 'bold', fontSize: '1.3rem', marginBottom: '20px' }}>Create a "Summer Memory Card":</p>

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}>
          <img 
            src={`${imgPrefix}/s/articles/69cb451faf1f3e9ce079482a/images/image-20260331092304-2.png`} 
            alt="Summer Memory Card Template" 
            style={{ width: '100%', maxWidth: '350px', borderRadius: '16px', border: '5px solid #222', boxShadow: '6px 6px 0 #FFD93D' }}
          />
        </div>

        <div className="grid-2" style={{ marginBottom: '30px' }}>
          <img 
            src={`${imgPrefix}/s/articles/69cb451faf1f3e9ce079482a/images/image-20260331092304-3.png`} 
            alt="Summer Memory Card Ex 2" 
            className="activity-image"
          />
          <img 
            src={`${imgPrefix}/s/articles/69cb451faf1f3e9ce079482a/images/image-20260331092304-4.png`} 
            alt="Summer Memory Card Ex 3" 
            className="activity-image"
          />
        </div>

        <ul>
          <li><strong>Draw their favorite summer moment</strong></li>
          <li>Just draw one favorite place/character/sport.</li>
          <li>It should be quick and precise.</li>
        </ul>
      </AnimatedCard>
    </div>
  );
}
