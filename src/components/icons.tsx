import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="currentColor">
        <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Zm0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88Z" />
        <path d="M168 88a40 40 0 1 0-40 40a40 40 0 0 0 40-40Zm-40 24a24 24 0 1 1 24-24a24 24 0 0 1-24 24Z" />
        <path d="M128 128a88.11 88.11 0 0 0-74.66 45.33a8 8 0 0 0 13.32 8A72 72 0 0 1 128 144a72.57 72.57 0 0 1 61.34 37.33a8 8 0 0 0 13.32-8A88.11 88.11 0 0 0 128 128Z" />
      </g>
    </svg>
  );
}
