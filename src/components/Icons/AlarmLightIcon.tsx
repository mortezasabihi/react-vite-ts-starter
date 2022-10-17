import * as React from 'react';
import { SVGProps } from 'react';

const SvgAlarmLightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.15 7.831a2.976 2.976 0 1 1 5.701 0l-1.564 5.211c-.07.234-.105.351-.159.447a1 1 0 0 1-.654.487C12.366 14 12.244 14 12 14c-.244 0-.366 0-.474-.024a1 1 0 0 1-.654-.487c-.054-.096-.09-.213-.16-.447L9.15 7.832Z"
      stroke="currentColor"
    />
    <circle cx={12} cy={19} r={2} stroke="currentColor" />
  </svg>
);

export default SvgAlarmLightIcon;
