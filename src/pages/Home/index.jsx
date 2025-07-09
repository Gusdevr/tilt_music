import {
  Container,
  Title,
  SearchBar,
  CategorySection,
  CategoryTitle,
  Carousel,
  MusicCard,
  MusicActions
} from './styles';

import styled from 'styled-components';
import { useMusic } from '../../components/context/MusicContext';
import { FaHeart, FaPlus, FaRandom } from 'react-icons/fa';

// Estilo para a lista simples
const SimpleList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;

  li {
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    background: #1e1e1e;
    color: #fff;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background: #2e2e2e;
    }
  }
`;

const Home = () => {
  const {
    musics,
    setCurrentIndex,
    setSearchTerm,
    searchTerm,
    isShuffle,
    setIsShuffle,
    showAll,
    setShowAll
  } = useMusic();

  return (
    <Container>
      <Title>🎧 TiLt Music</Title>

      <SearchBar
        type="text"
        placeholder="Buscar música ou artista..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setShowAll(false); // desativa modo "mostrar todas"
        }}
      />

      <button
        onClick={() => {
          setSearchTerm('');
          setShowAll(true); // ativa modo "mostrar todas"
        }}
        style={{
          marginBottom: '1rem',
          padding: '0.5rem 1rem',
          background: '#1db954',
          border: 'none',
          borderRadius: '8px',
          color: '#fff',
          cursor: 'pointer'
        }}
      >
        Mostrar Todas 🎶
      </button>

      {showAll ? (
        <SimpleList>
          {musics.map((music, i) => (
            <li key={music.id} onClick={() => setCurrentIndex(i)}>
              {music.title}
            </li>
          ))}
        </SimpleList>
      ) : (
        <CategorySection>
          <CategoryTitle>
            🎵 Resultado da Busca
            <button
              onClick={() => setIsShuffle(!isShuffle)}
              title="Modo Aleatório"
              style={{
                marginLeft: '10px',
                background: 'none',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <FaRandom color={isShuffle ? '#1db954' : '#ccc'} />
            </button>
          </CategoryTitle>

          <Carousel>
            {musics.map((music, i) => (
              <MusicCard key={music.id} onClick={() => setCurrentIndex(i)}>
                <img
                  src={music.cover}
                  alt={`Capa de ${music.title}`}
                  style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '8px'
                  }}
                />
                <h3>{music.title}</h3>
                {music.artist && <p>{music.artist}</p>}
                <MusicActions>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Adicionado à playlist: ${music.title}`);
                    }}
                  >
                    <FaPlus />
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Favoritado: ${music.title}`);
                    }}
                  >
                    <FaHeart />
                  </button>
                </MusicActions>
              </MusicCard>
            ))}
          </Carousel>
        </CategorySection>
      )}
    </Container>
  );
};

export default Home;
