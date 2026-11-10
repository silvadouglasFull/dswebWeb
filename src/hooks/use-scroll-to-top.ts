import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Custom hook to force window scroll position to the top on route changes.
 */
export function useScrollToTop(): void {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) return;
        window.scrollTo(0, 0);
    }, [pathname, hash]);
}   