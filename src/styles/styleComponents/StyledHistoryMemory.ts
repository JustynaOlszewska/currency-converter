import styled from "styled-components";
import { breakPoints } from "../breakPoints";
import { ShareFlexSpace } from "../share";
import { Transla } from "../../shareTS";

export const StyledWrapperHistoryMemory = styled.section<Transla>`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  text-align: center;
  transform: ${(props) =>
    props.transla ? "translateY(88%)" : "translateY(0)"};
  transition: transform 2s;
  color: ${({ theme }) => theme.after.color};
  font-size: 1rem;
  z-index: 1;
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    left: -23%;
    width: 552px;
    transform: ${(props) =>
      props.transla ? "translateX(90%)" : "translateX(0)"};
  }
  @media (min-width: ${breakPoints.biglarge}px) and (orientation: landscape) {
    left: -20%;
    width: 652px;
    transform: ${(props) =>
      props.transla ? "translateX(88%)" : "translateX(0)"};
  }
`;

export const StyledContainerDiv = styled.div`
  position: absolute;
  top: 40px;
  right: 4%;
  width: 90%;
  opacity: 0.5;
  z-index: 3;
  @media (min-width: ${breakPoints.minismall}px) {
    top: 75px;
    height: 90%;
  }
  @media (min-width: 800px) {
    top: 80px;
  }
  @media (min-width: ${breakPoints.bigsmall}px) and (orientation: landscape) {
    top: 17%;
    height: 70%;
  }
  @media (min-width: 533px) and (orientation: landscape) {
    top: 30px;
    height: 80%;
  }
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    top: 65px;
    height: 200px;
    width: 452px;
    right: 50%;
    transform: translateX(50%);
  }
  @media (min-width: 850px) and (orientation: landscape) {
    height: 400px;
  }
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    top: 75px;
    height: 400px;
    right: 37%;
  }

  @media (min-width: ${breakPoints.biglarge}px) and (orientation: landscape) {
    right: 40%;
  }
`;

export const StyledHeader = styled.header`
  ${ShareFlexSpace}
  height: 58px;
  width: 90%;
  text-align: left;
  opacity: 1;
  margin: 0 22px;
  line-height: 58px;
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    width: 90%;
  }
`;
