import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop implements useEffect React hook to ensure that whenever the user links to a new page
 * they are automatically brought to the top of the page
 * @returns null
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}