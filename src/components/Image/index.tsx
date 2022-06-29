import { useState } from "react";
import { Wrapper, BoxSkeleton } from "./styles";

type ImageProps = {
  src: string;
  alt: string;
};

export const Image = ({ src, alt }: ImageProps) => {
  const [skeleton, setSkeleton] = useState(true);

  const handleLoadImage = (event: any) => {
    setSkeleton(false);
    event.target.style.opacity = 1;
  };

  return (
    <Wrapper>
      {skeleton && <BoxSkeleton></BoxSkeleton>}
      <img src={src} alt={alt} onLoad={handleLoadImage} />
    </Wrapper>
  );
};
