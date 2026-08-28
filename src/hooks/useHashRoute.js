import { useState, useEffect } from 'react';

// Lightweight hash router. Section anchors (#about, #projects) stay as native
// scroll targets and resolve to the "home" route; only #/project/:slug paths
// switch the rendered view.
export default function useHashRoute() {
    const [hash, setHash] = useState(() => (typeof window === 'undefined' ? '' : window.location.hash));

    useEffect(() => {
        const onChange = () => setHash(window.location.hash);
        window.addEventListener('hashchange', onChange);
        return () => window.removeEventListener('hashchange', onChange);
    }, []);

    const match = hash.match(/^#\/project\/([^/?#]+)/);
    if (match) return { name: 'project', slug: decodeURIComponent(match[1]) };
    return { name: 'home' };
}
