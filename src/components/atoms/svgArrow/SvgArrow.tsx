import * as React from "react";
import { SvgArrowProps } from "./typesTS";

const SvgArrow: React.FC<SvgArrowProps> = ({
  view,
  children,
}: SvgArrowProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={!view ? "#f6f7f9" : undefined}
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <defs></defs>
      {children}
      <path className="b" d="M16.01,11H4v2H16.01v3L20,12,16.01,8Z" />
    </svg>
  );
};

export default SvgArrow;
