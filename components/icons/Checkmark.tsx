import * as React from "react";
import type { SVGProps } from "react";
const Checkmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <g stroke="#292929" clipPath="url(#a)">
      <path d="M14.667 8A6.667 6.667 0 1 0 1.334 8a6.667 6.667 0 0 0 13.333 0Z" />
      <path d="M5.334 8.333 7 10l3.666-4" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h16v16H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default Checkmark;