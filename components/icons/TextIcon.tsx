import * as React from "react";
import type { SVGProps } from "react";
const TextIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path stroke="#292929" strokeLinejoin="round" d="M10 14H6" />
    <path fill="#292929" d="M7.5 2v12h1V2z" />
    <path
      stroke="#292929"
      strokeLinejoin="round"
      d="M12.667 4V2H3.333l.001 2"
    />
  </svg>
);
export default TextIcon;