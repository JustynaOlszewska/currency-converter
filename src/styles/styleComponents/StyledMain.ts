import styled from "styled-components";
import { breakPoints } from "../../styles/breakPoints";

export const StyledWrapperMain = styled.section`
  position: absolute;
  top: 2%;
  left: 0;
  height: 90vh;
  @media (orientation: landscape) {
    width: 95%;
  }
  @media (orientation: portrait) {
    width: 100%;
  }
  @media (min-height: 590px) and (orientation: landscape) {
    height: 80%;
  }
  @media (min-width: 590px) and (orientation: portrait) {
    height: 30%;
  }
  @media (min-width: 800px) and (orientation: portrait) {
    height: 554px;
    width: 600px;
    left: 100px;
  }
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    top: 70px;
    left: 50px;
  }
  @media (min-width: ${breakPoints.middlelarge}px) and (orientation: landscape) {
    left: 140px;
    width: 700px;
    height: 454px;
  }
  @media (min-width: ${breakPoints.extralarge}px) and (orientation: landscape) {
    left: 350px;
  }
  @media (min-width: ${breakPoints.biglarge}px) and (orientation: landscape) {
    top: 213px;
    left: 359px;
    width: 600px;
    height: 654px;
  }
`;
