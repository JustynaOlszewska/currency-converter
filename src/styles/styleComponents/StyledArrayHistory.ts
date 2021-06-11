import { breakPoints } from "../../styles/breakPoints";
import { ShareFlexColumn, ShareFlexSpace } from "../share";
import styled from "styled-components";

export const StyledUl = styled.ul`
  ${ShareFlexColumn}
  align-items: stretch;
  padding: 0;
  height: 70%;
  margin: 0;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: grey;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  }
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    height: 250px;
  }
  @media (min-width: ${breakPoints.biglarge}px) and (orientation: landscape) {
    height: 400px;
  }
`;
export const StyledContainerParagraph = styled.div`
  display: flex;
  text-align: right;
  flex-grow: 1;
  margin-left: 2px;
  & > p:nth-child(1) {
    flex-grow: 3;
  }
  & > p:nth-child(2) {
    flex-grow: 1;
    display: none;
  }
  & > p:nth-child(3) {
    width: 80px;
    word-wrap: break-all;
  }
  @media (min-width: ${breakPoints.minismall}px) {
    & > p:nth-child(3) {
      width: 100px;
      word-wrap: break-all;
    }
  }
  @media (min-width: 600px) {
    & > p:nth-child(2) {
      display: block;
    }
    & > p:nth-child(3) {
      width: 150px;
    }
  }
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    text-align: right;

    & > p:nth-child(2) {
      display: block;
    }
    & > p:nth-child(3) {
      width: 150px;
    }
  }
`;

export const StyledLi = styled.li`
  ${ShareFlexSpace}
  list-style-type: none;
  min-height: 52px;
  font-size: 0.7rem;
  font-weight: var(--unnamed-font-weight-bold);
  font-family: var(--unnamed-font-family-open-sans);
  color: var(--unnamed-color-ffffff);
  text-align: left;
  letter-spacing: 0px;
  margin: 0 22px;
  @media (min-width: ${breakPoints.minismall}px) {
    font-size: 1rem;
  }
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    font-size: 1.38rem;
  }
`;

export const StyledParagraph = styled.p`
  margin: 0;
  line-height: 52px;
  width: 50px;
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    &:nth-child(1) {
      width: 100px;
    }
  }
`;
