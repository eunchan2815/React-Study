// styles.ts
import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 80px;
  background-color: #00164f; // 토트넘 딥블루 컬러 느낌
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  color: white;
  font-size: 1.2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

// 로고나 메뉴 스타일
export const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Menu = styled.nav`
  display: flex;
  gap: 2rem;
`;

export const MenuItem = styled.a`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;

  &:hover {
    color: #f9c300; // 강조색
  }
`;