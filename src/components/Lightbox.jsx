import React, { useEffect, useState } from 'react';

export default function Lightbox() {
  const [src, setSrc] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      setSrc(e.detail);
      setIsOpen(true);
    };
    window.addEventListener('open-lightbox', handler);
    return () => window.removeEventListener('open-lightbox', handler);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex items-center justify-center z-50" onClick={() => setIsOpen(false)}>
      <img src={src} alt="Enlarged" className="max-w-4xl max-h-[80vh]" />
    </div>
  );
}