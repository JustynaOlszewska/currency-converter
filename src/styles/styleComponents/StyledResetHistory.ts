import styled from "styled-components";
import { breakPoints } from "../../styles/breakPoints";

export const StyledReset = styled.p`
  font-size: 1rem;
  font-weight: var(--unnamed-font-style-normal);
  font-family: var(--unnamed-font-family-open-sans);
  color: var(--unnamed-color-ffffff);
  text-align: center;
  text-decoration: underline;
  letter-spacing: 0.8px;
  cursor: pointer;
  @media (min-width: ${breakPoints.large}px) and (orientation: landscape) {
    font-size: 1.38rem;
  }
`;
