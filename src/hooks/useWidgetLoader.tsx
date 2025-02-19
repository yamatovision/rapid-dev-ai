'use client'
import { useState } from 'react';

export const useWidgetLoader = () => {
  const [isWidgetLoading, setIsWidgetLoading] = useState(false);

  const loadWidget = async () => {
    if (isWidgetLoading) return;
    setIsWidgetLoading(true);

    const loadScript = (src: string) => new Promise<void>((resolve, reject) => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      script.defer = true;
      script.onload = () => {
        console.log(`Loaded: ${src}`);
        resolve();
      };
      script.onerror = (e) => reject(e);
      document.head.appendChild(script);
    });

    try {
      const dependencies = [
        'https://unpkg.com/react@18/umd/react.production.min.js',
        'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js',
        'https://unpkg.com/@mui/material@5.15.14/umd/material-ui.production.min.js',
        'https://unpkg.com/@emotion/react@11.11.3/dist/emotion-react.umd.min.js',
        'https://unpkg.com/@emotion/styled@11.11.0/dist/emotion-styled.umd.min.js'
      ];

      for (const src of dependencies) {
        await loadScript(src);
      }

      await loadScript(process.env.NEXT_PUBLIC_WIDGET_URL || 'http://localhost:5174/dist/index.umd.js');

      if (window.AIChatWidget) {
        window.AIChatWidget.init({
          clientId: process.env.NEXT_PUBLIC_WIDGET_CLIENT_ID || 'YOUR_CLIENT_ID',
          theme: {
            primary: '#ff502b'
          },
          displayMode: 'modal',
          container: `ai-chat-widget-container-${Math.random().toString(36).substr(2, 9)}`
        });
      }
    } catch (error) {
      console.error('Failed to load widget:', error);
    } finally {
      setIsWidgetLoading(false);
    }
  };

  return {
    isWidgetLoading,
    loadWidget
  };
};