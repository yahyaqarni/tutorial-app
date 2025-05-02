import * as React from "react";
import type { SVGProps } from "react";
const LinkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#292929"
      strokeLinejoin="round"
      d="M6.665 8.82q.143.233.336.436a2.373 2.373 0 0 0 3.456 0l2.16-2.248a2.617 2.617 0 0 0 0-3.596 2.376 2.376 0 0 0-3.456 0l-.476.495"
    />
    <path
      stroke="#292929"
      strokeLinejoin="round"
      d="m7.312 12.094-.476.495a2.376 2.376 0 0 1-3.455 0 2.617 2.617 0 0 1 0-3.596l2.16-2.247a2.376 2.376 0 0 1 3.455 0q.195.203.336.436"
    />
  </svg>
);
export default LinkIcon;