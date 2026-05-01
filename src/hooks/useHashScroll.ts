import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * Reusable smooth-scroll-to-section helper.
 *
 * - On mount / location change: if the URL has a hash, smoothly scrolls to that
 *   element on the current page (waits a tick for content to mount).
 * - Returns `scrollToHash(hash)` to navigate to "/<hash>" from any route and
 *   then smoothly scroll to the target section.
 *
 * Works consistently across all routes and is language-agnostic (EN/FR).
 */
export function useHashScroll(homePath: string = "/") {
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll when the location hash changes (including after navigating home).
  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.replace("#", "");
    if (!id) return;

    // Try a few times in case the section hasn't mounted yet.
    let attempts = 0;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
      if (attempts++ < 10) setTimeout(tryScroll, 50);
    };
    setTimeout(tryScroll, 50);
  }, [location.pathname, location.hash]);

  const scrollToHash = useCallback(
    (hash: string, e?: React.MouseEvent) => {
      if (e) e.preventDefault();
      const normalized = hash.startsWith("#") ? hash : `#${hash}`;

      if (location.pathname !== homePath) {
        navigate(`${homePath}${normalized}`);
        return;
      }

      const id = normalized.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    },
    [location.pathname, navigate, homePath],
  );

  return { scrollToHash };
}
