import * as React from "react";
import type { SVGProps } from "react";
const CheckmarkSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path stroke="#292929" strokeLinejoin="round" d="M14 2v12H2V2z" />
    <path stroke="#292929" d="M5.333 8.333 7 10l3.667-4" />
  </svg>
);
export default CheckmarkSquare;