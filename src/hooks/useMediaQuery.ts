import { useEffect, useState } from "react";

export function useMediaQuery(media: string) {
  const [match, setMatch] = useState<boolean>();

  function changeMatch() {
    const { matches } = window.matchMedia(media);
    setMatch(matches);
  }

  useEffect(() => {
    changeMatch();

    window.addEventListener("resize", changeMatch);

    return () => {
      window.removeEventListener("resize", changeMatch);
    };
  }, [media]);

  return match;
}
