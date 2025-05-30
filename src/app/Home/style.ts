import styled from "styled-components";

export const MainContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 80px 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  box-sizing: border-box;
  overflow-x: hidden;

  @media (max-width: 768px) {
    gap: 20px;
    padding: 80px 0.5rem 1rem;
  }
`;

export const Background = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  padding-top: 30px;
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 2000px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;
  padding-left: 5%;
  
  @media (max-width: 768px) {
    gap: 20px;
    max-width: 100%;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: clamp(20px, 8vw, 100px); // 반응형 vw도 됨
  color: white;
  text-align: left;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const PrimaryButton = styled.button`
  background-color: #ffd900;
  color: #001b50;
  font-weight: bold;
  font-size: 18px;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const SecondaryButton = styled.button`
  background-color: transparent;
  color: #ffd900;
  font-weight: bold;
  font-size: 18px;
  padding: 1rem 2rem;
  border: 2px solid #ffd900;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 217, 0, 0.1);
  }
`;

export const BannerContainer = styled.div`
  width: 100%;
  padding: 20px 1rem;
  display: flex;
  justify-content: center;
`;

export const UniformBanner = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  padding: 2% 1%;
`;

export const ArticleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 20px 1rem;
`;

export const ArticleTitle = styled.div`
  font-weight: 600;
  font-size: clamp(10px, 8vw, 30px);
  display: block;
  padding: 2% 2%;
`