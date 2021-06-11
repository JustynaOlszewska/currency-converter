import styled from "styled-components";

export const StyledWrapper = styled.section`
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  background: var(--unnamed-color-f6f7f9) 0% 0% no-repeat padding-box;
  @media (min-width: 1024px) and (orientation: landscape) {
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const StyledDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0;
  width: 39%;
  min-height: 100%;
  max-width: 750px;
  max-height: 1080px;
  background: transparent
    linear-gradient(180deg, var(--unnamed-color-3578eb) 0%, #1c5cc5 100%) 0% 0%
    no-repeat padding-box;
  @media (min-width: 1024px) and (orientation: landscape) {
    z-index: 2;
  }
`;
