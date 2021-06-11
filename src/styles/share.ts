import { css } from "styled-components";
import { ColProps } from "../shareTS";
import { ThemeProps } from "../components/organism/form/typesTS";

export const theme: ThemeProps = {
  input: {
    color: "var(--unnamed-color-e82b52)",
    borderBottom: "2px solid red",
  },
  before: {
    backgroundColor: "var(--unnamed-color-c2cbd9) 0% 0% no-repeat padding-box;",
  },
  after: {
    color: "var(--unnamed-color-ffffff);",
    backgroundColor:
      "transparent linear-gradient(99deg, var(--unnamed-color-3578eb) 0%, #1C5CC5 100%) 0% 0% no-repeat padding-box;",
  },
};

export const ShareColorForm = css<ColProps>`
  color: ${({ col, theme }) => col && theme.input.color};
`;

export const ShareBorderForm = css<ColProps>`
  border-bottom: ${({ col, theme }) => col && theme.input.borderBottom};
`;

export const ShareFlexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const ShareFlexSpace = css`
  display: flex;
  justify-content: space-between;
`;
