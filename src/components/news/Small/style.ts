import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: clamp(280px, 40vw, 320px);
  height: clamp(158px, 22.5vw, 180px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: clamp(10px, 3vw, 16px);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
`;

export const Tag = styled.div`
  font-size: clamp(0.7rem, 1.5vw, 0.85rem);
  font-weight: bold;
  color: #ffd700;
`;

export const Title = styled.div`
  margin-top: clamp(2px, 0.8vw, 4px);
  font-size: clamp(0.9rem, 2.5vw, 1.25rem);
  font-weight: 600;
`;

export const DateText = styled.div`
  margin-top: clamp(4px, 1vw, 6px);
  font-size: clamp(0.7rem, 1.5vw, 0.85rem);
  opacity: 0.85;
`;
