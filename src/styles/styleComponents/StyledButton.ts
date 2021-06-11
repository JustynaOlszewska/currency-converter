import styled, { css } from "styled-components";
import { ColProps } from "../../shareTS";
import { breakPoints } from "../../styles/breakPoints";

const ShareColorButton = css<ColProps>`
  position: absolute;
  bottom: 2%;
  left: 50%;
  transform: translateX(-50%);
  color: ${({ theme }) => theme.after.color};
  border-radius: 100px;
  width: 80%;
  height: 40px;
  border-color: transparent;
  font-size: 1.38rem;
  line-height: 22px;
  letter-spacing: 2.8px;
  text-transform: uppercase;
  background: ${({ btn, theme }) =>
    !btn ? theme.before.backgroundColor : theme.after.backgroundColor};
  @media (min-width: ${breakPoints.bigsmall}px) {
    height: 60px;
    bottom: 10%;
  }
  @media (min-width: 801px) {
    width: 400px;
    bottom: 0;
    font-size: 1.3rem;
  }
  @media (min-width: ${breakPoints.minilarge}px) {
    bottom: 100px;
  }
  @media (orientation: landscape) and (min-width: ${breakPoints.small}px) {
    height: 26px;
    bottom: 0;
  }
  @media (orientation: landscape) and (min-width: ${breakPoints.minilarge}px) {
    bottom: 5px;
  }
  @media (orientation: landscape) and (min-width: ${breakPoints.minimedum}px) {
    height: 36px;
    bottom: 20px;
  }
  @media (orientation: landscape) and (min-width: ${breakPoints.medum}px) {
    height: 60px;
  }
  @media (orientation: landscape) and (min-width: ${breakPoints.large}px) {
    width: 50%;
  }
  @media (orientation: landscape) and (min-width: ${breakPoints.biglarge}px) {
    width: 80%;
    bottom: 100px;
  }
`;
export const StyledButton = styled.button<ColProps>`
  ${ShareColorButton}
`;
