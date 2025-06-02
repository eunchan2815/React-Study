import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 640px;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  overflow: hidden;
  background: black;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 40%);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const PlayButton = styled.svg`
  width: 64px;
  height: 64px;
  opacity: 0.9;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
`;

export const Title = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 30px;
  font-weight: 700;
  color: white;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  font-size: clamp(7px, 3vw, 30px);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const Iframe = styled.iframe`
  width: 100%;
  height: 100%;
  border-radius: 12px;
`;

