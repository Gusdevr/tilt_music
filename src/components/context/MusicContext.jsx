import { createContext, useContext, useState, useRef, useEffect } from 'react';

const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [musics, setMusics] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(
    parseInt(localStorage.getItem('currentIndex')) || 0
  );
  const [isShuffle, setIsShuffle] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);
  const audioRef = useRef(null);

  const BASE_URL = "http://177.22.229.215:3000";

  useEffect(() => {
    fetch(`${BASE_URL}/api/musics`)
      .then(res => res.json())
      .then(data => {
        const comCapaPadrao = data.map(music => ({
          ...music,
          cover: music.cover || `${BASE_URL}/default-cover.png`
        }));
        setMusics(comCapaPadrao);
      })
      .catch(err => console.error("Erro ao carregar músicas:", err));
  }, []);

  useEffect(() => {
    localStorage.setItem('currentIndex', currentIndex);
  }, [currentIndex]);

  const currentMusic = musics[currentIndex];

  const filteredMusics =
    showAll || searchTerm === ''
      ? musics
      : musics.filter(music =>
          music.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          music.artist?.toLowerCase().includes(searchTerm.toLowerCase())
        );

  useEffect(() => {
    if (currentIndex >= filteredMusics.length) {
      setCurrentIndex(0);
    }
  }, [filteredMusics.length]);

  const handleEnded = () => {
    if (filteredMusics.length === 0) return;
    if (isShuffle) {
      const randomIndex = Math.floor(Math.random() * filteredMusics.length);
      setCurrentIndex(randomIndex);
    } else {
      setCurrentIndex((prev) => (prev + 1) % filteredMusics.length);
    }
  };

  return (
    <MusicContext.Provider
      value={{
        musics: filteredMusics,
        currentMusic,
        setCurrentIndex,
        currentIndex,
        searchTerm,
        setSearchTerm,
        isShuffle,
        setIsShuffle,
        handleEnded,
        audioRef,
        setShowAll,
        showAll
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => useContext(MusicContext);
