import { useEffect } from "react";

export default function CursorGlow() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const touchDevice = window.matchMedia("(pointer: coarse)").matches;

    if (reducedMotion || touchDevice) return;

    let frame = null;

    const moveGlow = (event) => {
      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        document.documentElement.style.setProperty(
          "--pointer-x",
          `${event.clientX}px`
        );
        document.documentElement.style.setProperty(
          "--pointer-y",
          `${event.clientY}px`
        );
      });
    };

    window.addEventListener("pointermove", moveGlow, { passive: true });

    return () => {
      window.removeEventListener("pointermove", moveGlow);
      if (frame) cancelAnimationFrame(frame);
      document.documentElement.style.removeProperty("--pointer-x");
      document.documentElement.style.removeProperty("--pointer-y");
    };
  }, []);

  return null;
}
