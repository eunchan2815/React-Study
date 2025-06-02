import styled from "styled-components";

export const Card = styled.div`
  flex: 0 0 auto;
  width: 248px;
  height: 350px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  background-color: #f5f5f5;
  scroll-snap-align: start;
`;


export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
`;

export const ButtonWrapper = styled.div`
  z-index: 1;
  position: relative;
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
  padding: 12px 16px;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
