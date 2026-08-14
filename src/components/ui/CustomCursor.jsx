import { useEffect, useRef } from 'react';

/**
 * Custom cursor: a precise dot that tracks the pointer exactly, plus a ring
 * that eases (lags) behind it — the "following line". Enabled only on devices
 * with a fine pointer and when the user hasn't asked to reduce motion.
 */
const CustomCursor = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        const finePointer = window.matchMedia('(pointer: fine)').matches;
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!finePointer || reduced) return;

        const root = document.documentElement;
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        root.classList.add('custom-cursor');

        let mx = window.innerWidth / 2;
        let my = window.innerHeight / 2;
        let rx = mx;
        let ry = my;
        let raf = 0;

        const onMove = (e) => {
            mx = e.clientX;
            my = e.clientY;
            dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
            root.classList.remove('cursor-hidden');
        };

        const loop = () => {
            // Ease the ring toward the pointer for the trailing effect.
            rx += (mx - rx) * 0.16;
            ry += (my - ry) * 0.16;
            ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
            raf = requestAnimationFrame(loop);
        };

        const interactiveSel = 'a, button, input, textarea, select, label, summary, [role="button"], [data-cursor]';
        const onOver = (e) => {
            const el = e.target.closest?.(interactiveSel);
            root.classList.toggle('cursor-hover', !!el);
        };

        const onDown = () => root.classList.add('cursor-down');
        const onUp = () => root.classList.remove('cursor-down');
        const onLeave = () => root.classList.add('cursor-hidden');

        window.addEventListener('mousemove', onMove, { passive: true });
        document.addEventListener('mouseover', onOver, { passive: true });
        window.addEventListener('mousedown', onDown);
        window.addEventListener('mouseup', onUp);
        document.addEventListener('mouseleave', onLeave);
        loop();

        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseover', onOver);
            window.removeEventListener('mousedown', onDown);
            window.removeEventListener('mouseup', onUp);
            document.removeEventListener('mouseleave', onLeave);
            root.classList.remove('custom-cursor', 'cursor-hover', 'cursor-down', 'cursor-hidden');
        };
    }, []);

    return (
        <>
            <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
            <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
        </>
    );
};

export default CustomCursor;
