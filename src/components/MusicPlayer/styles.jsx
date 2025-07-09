import styled from "styled-components";

export const PlayerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #121212;
  border-top: 1px solid #1db954;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 999;

  audio {
    width: 100%;
    max-width: 800px;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 0.5rem;
    color: #fff;
    font-size: 0.9rem;
    text-align: center;
  }
`;

export const Controls = styled.div`
  display: flex;
  gap: 1rem;

  button {
    background: transparent;
    border: none;
    color: #1db954;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover {
      color: #17a74a;
    }
  }
`;
