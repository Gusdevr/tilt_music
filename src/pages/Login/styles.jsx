import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #121212;
  display: flex;
  flex-direction: column; 
  align-items: center;
  justify-content: center;
`;


export const Title = styled.h2`
  color: #1db954;
  margin-bottom: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #1e1e1e;
  padding: 2rem;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;


  p {
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  background: #2a2a2a;
  border: none;
  padding: 1rem;
  margin-bottom: 1rem;
  color: #fff;
  border-radius: 5px;
`;

export const Button = styled.button`
  background: #1db954;
  color: #fff;
  padding: 1rem;
  font-weight: bold;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: #17a74a;
  }
`;
