'use client';

import { RefObject, useEffect, useRef } from 'react';
import styles from './hero.module.css';

export default function Hero3D({ sectionRef }: { sectionRef: RefObject<HTMLElement | null> }) {
  const hostRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const host = hostRef.current, section = sectionRef.current;
    if (!host || !section) return;
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number });
    if (connection.connection?.saveData || (connection.deviceMemory && connection.deviceMemory <= 2)) return;
    const controller = new AbortController();
    let cleanup: (() => void) | undefined;
    let timeout: number | undefined;
    void import('./scene').then(({ createHeroScene }) => {
      if (controller.signal.aborted) return;
      timeout = window.setTimeout(() => controller.abort(), 15000);
      return createHeroScene(host, section, controller.signal, () => { host.dataset.ready = 'false'; });
    }).then(dispose => {
      clearTimeout(timeout);
      if (controller.signal.aborted) dispose?.(); else cleanup = dispose;
    }).catch((error: unknown) => {
      clearTimeout(timeout);
      host.dataset.ready = 'false';
      if (process.env.NODE_ENV === 'development') host.dataset.fallbackReason = error instanceof Error ? error.message : 'Scene unavailable';
    });
    return () => { clearTimeout(timeout); controller.abort(); cleanup?.(); };
  }, [sectionRef]);
  return <div ref={hostRef} className={`absolute inset-0 ${styles.visual}`} aria-hidden="true" />;
}
