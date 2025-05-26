'use client';
import { useEffect } from 'react';

export default function VisitLogger() {
  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(res => res.json())
      .then(({ ip }) => {
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbwPR0-wUQH019m63L0a7rTj7J4lJa8jg_soG6sVbHx-7jKeFk-hI-gzdnMzOYTjDt-Y/exec';
        fetch(scriptUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ip }),
        });
      });
  }, []);

  return null;
}
