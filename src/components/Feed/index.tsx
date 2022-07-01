import { useEffect, useState } from "react";
import { FeedModal } from "./FeedModal";
import { FeedPhotos } from "./FeedPhotos";
import {} from "./styles";

type FeedProps = {
  user?: string;
};

export const Feed = ({ user }: FeedProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [photoId, setPhotoId] = useState<number | undefined>();
  const [pages, setPages] = useState<number[]>([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    window.addEventListener("wheel", infiniteScroll);
    window.addEventListener("scroll", infiniteScroll);

    return () => {
      window.removeEventListener("wheel", infiniteScroll);
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [infinite]);

  function infiniteScroll() {
    let wait = false;

    if (infinite) {
      const scrollY = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;

      if (scrollY > height * 0.5 && !wait) {
        setPages((prevState) => [...prevState, prevState.length + 1]);
        wait = true;

        setTimeout(() => {
          wait = false;
        }, 50);
      }
    }
  }

  return (
    <>
      {pages.map((page) => (
        <FeedPhotos
          key={page}
          page={page}
          user={user}
          setModalIsOpen={setModalIsOpen}
          setPhotoId={setPhotoId}
          setInfinite={setInfinite}
        />
      ))}
      {modalIsOpen && (
        <FeedModal photoId={photoId} setModalIsOpen={setModalIsOpen} />
      )}
    </>
  );
};
