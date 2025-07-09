import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: #121212;
  color: #fff;
`;

export const Title = styled.h1`
  color: #1db954;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

export const SearchBar = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
  background-color: #1e1e1e;
  color: #fff;
`;

export const CategorySection = styled.div`
  margin-bottom: 3rem;
`;

export const CategoryTitle = styled.h2`
  font-size: 1.8rem;
  color: #1db954;
  margin-bottom: 1rem;
`;

export const Carousel = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 1.5rem;
  padding-bottom: 1rem;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #1db954;
    border-radius: 4px;
  }
`;

export const MusicCard = styled.div`
  flex: 0 0 auto;
  background: #1e1e1e;
  border-radius: 10px;
  padding: 1rem;
  width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 0.5rem 0;
    font-size: 1rem;
    text-align: center;
  }

  p {
    font-size: 0.9rem;
    color: #bbb;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  audio {
    width: 100%;
  }
`;

export const MusicActions = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
  gap: 0.8rem;

  button {
    background: transparent;
    border: none;
    color: #1db954;
    font-size: 1.2rem;
    cursor: pointer;

    &:hover {
      color: #17a74a;
    }
  }
`;
