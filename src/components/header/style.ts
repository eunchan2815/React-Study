import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background: linear-gradient(135deg, #00164f, #001a5c, #132257);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  color: white;
  box-shadow: 0 4px 20px rgba(0, 22, 79, 0.3);
  border-bottom: 2px solid rgba(249, 195, 0, 0.2);
  
  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 55px;
  }
`;

export const Logo = styled.img`
  width: 45px;
  height: 45px;
  object-fit: contain;
  padding: 2px;
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

export const MenuItem = styled.a`
  color: #e8f0ff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 8px 12px;
  border-radius: 6px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  
  &:hover {
    color: #f9c300;
    background: rgba(249, 195, 0, 0.1);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 6px 8px;
  }
`;

export const Linkitem = styled.a`
  color: #e8f0ff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;
  padding: 8px 16px;
  border: 2px solid rgba(249, 195, 0, 0.3);
  border-radius: 25px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  background: rgba(249, 195, 0, 0.1);
  
  &:hover {
    color: #00164f;
    background: #f9c300;
    border-color: #f9c300;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(249, 195, 0, 0.4);
  }
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
`;

export const Divider = styled.div`
  width: 2px;
  height: 30px;
  background: linear-gradient(180deg, transparent, #f9c300, transparent);
  opacity: 0.6;
  border-radius: 2px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;