import * as React from 'react';
import { SVGProps } from 'react';

const SvgBookOpenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    {...props}
  >
    <path
      d="M5 17h4a3 3 0 0 1 3 3V10c0-2.828 0-4.243-.879-5.121C10.243 4 8.828 4 6 4H5c-.943 0-1.414 0-1.707.293C3 4.586 3 5.057 3 6v9c0 .943 0 1.414.293 1.707C3.586 17 4.057 17 5 17ZM19 17h-4a3 3 0 0 0-3 3V10c0-2.828 0-4.243.879-5.121C13.757 4 15.172 4 18 4h1c.943 0 1.414 0 1.707.293C21 4.586 21 5.057 21 6v9c0 .943 0 1.414-.293 1.707C20.414 17 19.943 17 19 17Z"
      stroke="currentColor"
      strokeWidth={2}
    />
  </svg>
);

export default SvgBookOpenIcon;
