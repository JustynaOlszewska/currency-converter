import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Show } from "../../components/molecules/actionHistoryMemory/typesTS";
import { Transla } from "../../shareTS";
import { breakPoints } from "../breakPoints";

export const StyledClose = styled.div<Show>`
  display: ${(props) => (props.show ? "none" : "block")};
  margin-right: 5px;
`;

export const StyledWrapperActionHistory = styled.section<Transla>`
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  text-align: right;
  color: ${({ theme }) => theme.after.color};
  background: ${({ theme }) => theme.after.backgroundColor};
  transform: ${(props) =>
    props.transla ? "translateY(105%)" : "translateY(16%)"};
  transition: transform 2s;
  border-radius: 20px;
  box-shadow: 10px 15px 50px #4548604d;
  z-index: 0;
  top: -7%;
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    width: 500px;
    top: 0;
    left: -14%;
    transform: ${(props) =>
      props.transla ? "translateX(105%)" : "translateX(23%)"};
  }
  @media (min-width: ${breakPoints.middlelarge}px) and (orientation: landscape) {
    width: 700px;
    left: -60%;
  }
  @media (min-width: ${breakPoints.extralarge}px) and (orientation: landscape) {
    left: -55%;
  }
  @media (min-width: ${breakPoints.biglarge}px) and (orientation: landscape) {
    width: 602px;
    left: -14px;
    transform: ${(props) =>
      props.transla ? "translateX(95%)" : "translateX(13%)"};
  }
`;
export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.after.color};
  text-decoration: none;
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    writing-mode: vertical-rl;
  }
`;
export const StyledContainerDiv = styled.div`
  display: flex;
  position: absolute;
  right: 100px;
  top: 75%;
  width: 50%;
  margin: 50px 20px 0 20px;
  text-transform: uppercase;
  font-size: 1rem;

  @media (min-width: ${breakPoints.minismall}px) {
    top: 85%;
  }
  @media (min-width: ${breakPoints.bigsmall}px) and (orientation: landscape) {
    top: 73%;
  }
  @media (min-width: 533px) and (orientation: landscape) {
    top: 75%;
  }
  @media (min-width: ${breakPoints.minimedum}) and (orientation: landscape) {
    top: 81%;
  }
  @media (min-width: ${breakPoints.medum}px) {
    top: 80%;
  }

  @media (min-width: 760px) {
    top: 83%;
  }
  @media (min-width: ${breakPoints.bigmedium}px) and (orientation: portrait) {
    top: 87%;
  }

  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    font-size: var(--unnamed-font-size-20);
    display: inline;
    right: 0;
    top: 0;
    width: 100px;
  }
`;
