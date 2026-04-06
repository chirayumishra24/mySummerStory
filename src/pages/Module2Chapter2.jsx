import React from 'react';
import AnimatedCard from '../components/AnimatedCard';
import BouncyTitle from '../components/BouncyTitle';
import WavyDivider from '../components/WavyDivider';
import FullscreenButton from '../components/FullscreenButton';

const imgPrefix = 'https://login.skillizee.io';

export default function Module2Chapter2() {
  return (
    <div className="chapter-layout">
      <FullscreenButton />
      <div className="title-badge animate-float" style={{ background: '#6BCB77' }}>Module 2: Express & Reflect</div>

      <AnimatedCard style={{ width: '100%' }}>
        <BouncyTitle text="Chapter 2: Reflect & Connect" />
      </AnimatedCard>
      <WavyDivider color1="#845EC2" color2="#FF6EC7" />

      <AnimatedCard style={{ width: '100%' }} delay={0.1}>
        <h2 style={{ color: '#845EC2', fontSize: '1.8rem' }}>Activity: My Summer Feelings 💭</h2>
        <p style={{ fontStyle: 'italic', color: '#555' }}>
          Help students think deeper about their experiences and express their feelings, learning, and favorite moments.
        </p>

        <h3 style={{ color: '#6BCB77', marginTop: '10px' }}>Think – Feel – Share</h3>

        <div className="grid-2">
          <div style={{ background: '#FFF9E6', padding: '20px', borderRadius: '16px', border: '3px solid #222', boxShadow: '4px 4px 0 #FFD93D' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#FF8C42' }}>
              <span className="chip chip-orange">Step 1</span> Think (2–3 mins)
            </h4>
            <ul>
              <li>What made you the happiest this summer?</li>
              <li>Did anything surprise you?</li>
              <li>Did you learn something new?</li>
            </ul>
          </div>

          <div style={{ background: '#F0FFF0', padding: '20px', borderRadius: '16px', border: '3px solid #222', boxShadow: '4px 4px 0 #6BCB77' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#6BCB77' }}>
              <span className="chip chip-green">Step 2</span> Feel (5 mins)
            </h4>
            <div className="prompt-bubble">"I felt happy when…"</div>
            <div className="prompt-bubble">"My favorite moment was…"</div>
            <div className="prompt-bubble">"This summer, I learned…"</div>
            <div className="prompt-bubble">"Next summer, I want to…"</div>
          </div>
        </div>
      </AnimatedCard>

      <WavyDivider color1="#6BCB77" color2="#FFD93D" />

      <div className="outcome-card" style={{ width: '100%' }}>
        <h2>Outcome 🏆</h2>
        <p>By the end of the session, students will:</p>
        <ul>
          <li>Improve communication skills</li>
          <li>Build confidence in speaking</li>
          <li>Learn to listen and engage with peers</li>
          <li>Express creativity through drawing and storytelling</li>
        </ul>
      </div>
    </div>
  );
}
