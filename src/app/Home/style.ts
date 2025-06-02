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
  flex-direction: column;
`;

export const ArticleTitle = styled.div`
  font-weight: 600;
  font-size: clamp(10px, 8vw, 30px);
  display: block;
  padding: 2% 8%;
`

export const NewscardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 3rem;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`

export const BigNewscardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: row;
  padding: 20px 3rem;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`

export const Hstack = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  padding: 20px 3rem;
`

export const Container = styled.div`
  position: relative;
  padding: 0 60px;
  
  @media (max-width: 768px) {
    padding: 0 40px;
  }
`;

export const ScrollBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #2c3e50;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.15),
    0 2px 4px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.05);
    box-shadow: 
      0 6px 20px rgba(0, 0, 0, 0.2),
      0 3px 6px rgba(0, 0, 0, 0.15);
    color: #1a252f;
  }
  
  &:active {
    transform: translateY(-50%) scale(0.98);
    transition: all 0.1s ease;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: translateY(-50%) scale(0.95);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

export const LeftBtn = styled(ScrollBtn)`
  left: 15px;
  
  &::before {
    content: '<';
    font-weight: 300;
    font-size: 20px;
    line-height: 1;
  }
  
  @media (max-width: 768px) {
    left: 8px;
    
    &::before {
      font-size: 18px;
    }
  }
`;

export const RightBtn = styled(ScrollBtn)`
  right: 15px;
  
  &::before {
    content: '>';
    font-weight: 300;
    font-size: 20px;
    line-height: 1;
  }
  
  @media (max-width: 768px) {
    right: 8px;
    
    &::before {
      font-size: 18px;
    }
  }
`;

export const ShoppingCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin: 0 20px;
  padding: 24px 0;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  
  
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  

  background: 
    linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20px, transparent 20px),
    linear-gradient(-90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 20px, transparent 20px);
  

  & > * {
    opacity: 0;
    animation: fadeInSlide 0.6s ease-out forwards;
    animation-delay: calc(var(--index, 0) * 0.1s);
  }
  
  @keyframes fadeInSlide {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @media (max-width: 768px) {
    gap: 16px;
    margin: 0 12px;
    padding: 16px 0;
  }
`;

export const ScrollIndicator = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 16px;
  
  .dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    cursor: pointer;
    
    &.active {
      background: #007bff;
      transform: scale(1.2);
    }
    
    &:hover {
      background: rgba(0, 0, 0, 0.4);
    }
  }
`;

export const FadeOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40px;
  pointer-events: none;
  z-index: 10;
  
  &.left {
    left: 60px;
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
  }
  
  &.right {
    right: 60px;
    background: linear-gradient(-90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
  }
  
  @media (max-width: 768px) {
    width: 30px;
    
    &.left {
      left: 40px;
    }
    
    &.right {
      right: 40px;
    }
  }
`;

export const MembershipContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 24px;
  margin: 60px auto;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

export const HStack = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start; /* 왼쪽 정렬로 변경 */
  width: 100%;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

export const VStack = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  padding-top: 40px;

  @media (max-width: 768px) {
    padding-top: 0;
    align-items: center;
    text-align: center;
  }
`;

export const Mikey = styled.img`
  width: 50%;
  max-width: 600px;
  height: auto;
  border-radius: 16px;
  object-fit: cover;
  margin-right: 40px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
  }
`;

export const MembershipTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: #1c1c1c;
  margin-bottom: 8px;
  align-items: center;
`;

export const MembershipDescription = styled.div`
  font-size: 16px;
  color: #444;
  line-height: 1.6;
  align-items: center;
  

  p {
    margin-bottom: 12px;
  }
`;

export const MembershipList = styled.ul`
  padding-left: 20px;
  margin-bottom: 16px;

  li {
    margin-bottom: 8px;
    list-style-type: disc;
  }
`;

export const CTAButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 70px;
  background-color: #ffd900;
  color: black;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #001f5c;
    color: white;
  }
`;
