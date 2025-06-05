import styled from "styled-components";

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 80px 40px;
  overflow-x: hidden;
`;

export const Carousel = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex: 1;
  gap: 20px;
  margin: 0;
  padding: 4px;
  overflow-x: hidden;
`;

export const CarouselHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CarouselTitle = styled.h1`
  font-size: 28px;
  font-weight: 600;
  line-height: 36px;
  color: #4f6076;
  margin: 0;
`;

export const CarouselNavigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
`;

export const CarouselNavigationButton = styled.span`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f7f8f6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;