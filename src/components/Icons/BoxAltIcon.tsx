import * as React from 'react';
import { SVGProps } from 'react';

const SvgBoxAltIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 7.657c0-.818 0-1.226.152-1.594.152-.367.442-.657 1.02-1.235l.656-.656c.578-.578.868-.868 1.235-1.02C7.431 3 7.84 3 8.657 3h6.686c.818 0 1.226 0 1.594.152.367.152.656.442 1.235 1.02l.656.656c.579.578.867.868 1.02 1.235.152.368.152.776.152 1.594V17c0 1.886 0 2.828-.586 3.414C18.828 21 17.886 21 16 21H8c-1.886 0-2.828 0-3.414-.586C4 19.828 4 18.886 4 17V7.657Z"
      stroke="currentColor"
      strokeWidth={2}
    />
    <path
      d="M4 7h16M9 11a3 3 0 0 0 6 0"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </svg>
);

export default SvgBoxAltIcon;
