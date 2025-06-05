import styled from "styled-components";

export const CarouselItem = styled.li<{ active?: boolean }>`
  position: relative; 
  width: 300px;
  height: 500px;
  padding: 4px;
  border-radius: 20px;
  list-style: none;
  transition: transform 0.2s ease-in-out;

  ${({ active }) => active && `
    outline: 4px solid #69a2ff;
  `}
`;

export const Video = styled.video`
  width: auto;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
`;

export const ButtonList = styled.nav`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1;
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
  fill: currentColor;
  cursor: pointer;
`;
