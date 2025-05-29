import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  box-sizing: border-box;
`;

export const Background = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: aquamarine;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 12px;

  @media (max-width: 480px) {
    padding: 0.75rem;
    max-width: 100%;
  }
`;

export const Button = styled.div`
  width: 100%;
  max-width: 320px;
  height: 40px;
  background-color: #007aff;
  border-radius: 30px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #005bb5;
  }
`;

export const Textfield = styled.input`
  width: 100%;
  max-width: 320px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  outline: none;
  transition: border 0.2s ease;

  &::placeholder {
    color: #aaa;
  }

  &:focus {
    border-color: #007aff;
    box-shadow: 0 0 0 2px rgba(0, 122, 255, 0.2);
  }
`;

export const Title = styled.div`
  width: 100%;
  max-width: 480px;
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;