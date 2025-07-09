import { useEffect, useState } from "react";
import { useMusic } from "../context/MusicContext";
import { PlayerContainer, Controls } from './styles';
import {
  FaBackward,
  FaForward,
  FaHeart,
  FaPlus,
  FaHome,
  FaRandom
} from 'react-icons/fa';

const MusicPlayer = () => {
  const {
    currentMusic,
    handleEnded,
    audioRef,
    currentIndex,
    setCurrentIndex,
    musics,
    isShuffle,
    setIsShuffle,
    setShowAll
  } = useMusic();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (audioRef.current && audioRef.current.duration) {
        const percent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(percent);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (audioRef.current && currentMusic) {
      audioRef.current.pause();
      audioRef.current.load();
      audioRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  if (!currentMusic) return null;

  const handleNext = () => {
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * musics.length);
      setCurrentIndex(randomIndex);
    } else {
      setCurrentIndex((prev) => (prev + 1) % musics.length);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? musics.length - 1 : prev - 1
    );
  };

  const handleFavorite = () => {
    alert(`Favoritado: ${currentMusic.title}`);
  };

  const handleAddToPlaylist = () => {
    alert(`Adicionado à playlist: ${currentMusic.title}`);
  };

  return (
    <PlayerContainer>
      <p>{currentMusic.title}</p>

      <audio
        ref={audioRef}
        controls
        autoPlay={false}
        onEnded={handleEnded}
        src={currentMusic.url}
      />

      <div style={{
        height: '6px',
        width: '100%',
        background: '#333',
        borderRadius: '4px',
        overflow: 'hidden',
        marginTop: '8px',
        maxWidth: '800px'
      }}>
        <div
          style={{
            height: '100%',
            width: `${progress}%`,
            background: '#1db954',
            transition: 'width 0.3s'
          }}
        />
      </div>

      <Controls>
        <button onClick={() => setShowAll(false)} title="Voltar para Home">
          <FaHome />
        </button>

        <button onClick={handlePrev} title="Anterior">
          <FaBackward />
        </button>

        <button onClick={handleNext} title="Próxima">
          <FaForward />
        </button>

        <button onClick={() => setIsShuffle(!isShuffle)} title="Modo Aleatório">
          <FaRandom color={isShuffle ? '#1db954' : '#ccc'} />
        </button>

        <button onClick={handleFavorite} title="Favoritar">
          <FaHeart />
        </button>

        <button onClick={handleAddToPlaylist} title="Adicionar à Playlist">
          <FaPlus />
        </button>
      </Controls>
    </PlayerContainer>
  );
};

export default MusicPlayer;
