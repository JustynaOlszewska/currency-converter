import { breakPoints } from "../breakPoints";
import styled from "styled-components";
import { ShareFlexColumn } from "../share";

export const StyledH1 = styled.h1`
  font-size: 2rem;
  font-weight: var(--unnamed-font-weight-bold);
  line-height: 47px;
  color: var(--unnamed-color-3578eb);
  text-align: center;
  @media (min-width: 600px) {
    font-size: 2.19rem;
  }
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    margin: 70px 70px 25px 70px;
    text-align: left;
  }
  @media (min-width: ${breakPoints.biglarge}px) and (orientation: landscape) {
    margin: 100px 151px 25px 154px;
  }
`;

export const StyledWrapperSectionForm = styled.section`
  ${ShareFlexColumn}
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  border-radius: 20px;
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    width: 400px;
  }
  @media (min-width: ${breakPoints.biglarge}px) and (orientation: landscape) {
    width: 600px;
  }
`;

export const StyledForm = styled.form`
  ${ShareFlexColumn}
  align-self: center;
  align-items: center;
  width: 80%;
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    width: 400px;
  }
`;
