"use client";
import { useEffect, useRef } from 'react';
import Styles from './Map.module.css';

export const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Abe4833f34ecefa730dd11b4d6d712a0ff6fa5dd48a6694c59566e55089be9e09&width=100%25&height=518&lang=ru_RU&scroll=true';
    script.async = true;
    script.charset = 'utf-8';

    mapContainer.current.appendChild(script);

    return () => {
      if (mapContainer.current) {
        mapContainer.current.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={mapContainer} className={Styles['map']}>
    </div>
  );
};


