import React, { useCallback } from 'react';
import { Maximize, Minimize } from 'lucide-react';

export default function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  }, []);

  React.useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  return (
    <button className="fullscreen-btn" onClick={toggleFullscreen} title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}>
      {isFullscreen ? <Minimize size={22} /> : <Maximize size={22} />}
    </button>
  );
}
