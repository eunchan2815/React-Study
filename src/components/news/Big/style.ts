import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 1312px;
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: clamp(16px, 2vw, 28px);
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  color: white;
  display: flex;
  flex-direction: column;
`;

export const Tag = styled.div`
  font-size: clamp(0.75rem, 1.2vw, 1rem);
  font-weight: bold;
  color: #ffd700;
`;

export const Title = styled.div`
  margin-top: clamp(4px, 1vw, 10px);
  font-size: clamp(1rem, 2vw, 1.4rem);
  font-weight: 600;
`;

export const DateText = styled.div`
  margin-top: clamp(4px, 1vw, 8px);
  font-size: clamp(0.75rem, 1.2vw, 1rem);
  opacity: 0.85;
`;
