import styled from "styled-components";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import { ColProps } from "../../shareTS";
import { breakPoints } from "../breakPoints";
import { ShareColorForm, ShareBorderForm } from "../share";

export const StyledInputAdornment = styled(InputAdornment)<ColProps>`
  ${ShareColorForm}
`;
export const StyledInput = styled(Input)<ColProps>`
  width: 100%;
  height: 16px;
  && {
    margin-left: 15px;
    ${ShareColorForm}
  }
  ${ShareBorderForm}
  @media(min-width: ${breakPoints.minismall}px) {
    height: 36px;
  }
  @media (min-width: ${breakPoints.small}px) {
    height: 56px;
  }
  @media (orientation: landscape) and (min-width: ${breakPoints.small}px) {
    height: 12px;
  }
  @media (orientation: landscape) and (min-width: ${breakPoints.bigsmall}px) {
    height: 16px;
  }
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    height: 30px;
    width: 80%;
  }
  @media (orientation: landscape) and (min-width: ${breakPoints.biglarge}px) {
    height: 56px;
    width: 100%;
  }
`;
export const StyledFormHelperText = styled(FormHelperText)<ColProps>`
  height: 25px;
  width: 100%;
  text-align: left;
  && {
    margin-left: 15px;
    font-size: 1.4rem;
    ${ShareColorForm}
  }
`;
