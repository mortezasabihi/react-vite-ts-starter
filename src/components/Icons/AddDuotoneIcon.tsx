import * as React from 'react';
import { SVGProps } from 'react';

const SvgAddDuotoneIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <circle cx={12} cy={12} r={9} fill="currentColor" fillOpacity={0.24} />
    <path
      d="M12 8v8M16 12H8"
      stroke="currentColor"
      strokeWidth={1.2}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgAddDuotoneIcon;
