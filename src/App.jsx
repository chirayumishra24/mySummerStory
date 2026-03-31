import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Background3D from './components/Background3D';
import FloatingParticles from './components/FloatingParticles';

const Module1Chapter1 = React.lazy(() => import('./pages/Module1Chapter1'));
const Module1Chapter2 = React.lazy(() => import('./pages/Module1Chapter2'));
const Module2Chapter1 = React.lazy(() => import('./pages/Module2Chapter1'));
const Module2Chapter2 = React.lazy(() => import('./pages/Module2Chapter2'));

function App() {
  const location = useLocation();

  return (
    <>
      <div className="canvas-container">
        <Background3D currentPath={location.pathname} />
      </div>

      <FloatingParticles count={16} />

      <div className="overlay-container">
        <Suspense fallback={
          <div style={{ margin: 'auto', fontSize: '2rem', fontFamily: 'Bubblegum Sans', color: 'white', textShadow: '2px 2px 0px rgba(0,0,0,0.2)' }}>
            Loading Summer Adventure... ☀️
          </div>
        }>
          <Routes>
            <Route path="/" element={<Module1Chapter1 />} />
            <Route path="/m1/c1" element={<Module1Chapter1 />} />
            <Route path="/m1/c2" element={<Module1Chapter2 />} />
            <Route path="/m2/c1" element={<Module2Chapter1 />} />
            <Route path="/m2/c2" element={<Module2Chapter2 />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
