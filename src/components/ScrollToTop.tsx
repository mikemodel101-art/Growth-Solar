import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Resets scroll on navigation, or scrolls to a #hash target when present. */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // small delay so the target section has painted
        window.setTimeout(
          () => el.scrollIntoView({ behavior: "smooth", block: "start" }),
          60,
        );
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
}
