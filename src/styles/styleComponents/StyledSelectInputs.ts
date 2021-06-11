import styled from "styled-components";
import NativeSelect from "@material-ui/core/NativeSelect";
import { breakPoints } from "../breakPoints";
import { ShareFlexSpace } from "../share";

export const StyledSelectsWrapper = styled.div`
  ${ShareFlexSpace}
  align-items: center;
  width: 100%;
  margin: 20px 0;
  font-size: 1.4rem;
  @media (orientation: landscape) and (min-width: ${breakPoints.small}px) {
    margin: 50px 0;
  }
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    width: 80%;
  }
  @media (min-width: ${breakPoints.biglarge}px) and (orientation: landscape) {
    width: 100%;
  }
`;
export const StyledNativeSelect = styled(NativeSelect)`
  background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
  box-shadow: 3px 3px 7px var(--unnamed-color-c2cbd9);
  border-radius: 5px;
  width: 150px;
  height: 36px;
  padding: 0 15px;
  opacity: 1;
  @media (min-width: ${breakPoints.minismall}px) {
    height: 56px;
  }
  && .MuiNativeSelect-icon {
    margin-right: 15px;
  }
  @media (orientation: landscape) and (min-width: ${breakPoints.small}px) {
    height: 12px;
  }
  @media (orientation: landscape) and (min-width: ${breakPoints.bigsmall}px) {
    height: 16px;
  }
  @media (orientation: landscape) and (min-width: 600px) {
    height: 36px;
  }
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    height: 40px;
  }
  @media (orientation: landscape) and (min-width: ${breakPoints.biglarge}px) {
    height: 56px;
  }
`;
