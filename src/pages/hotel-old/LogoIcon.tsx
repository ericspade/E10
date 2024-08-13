import { memo, SVGProps } from 'react';

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7.71429 0H24V9.77778H10.2857V18.6667H24V28.4444H10.2857V40H0V28.4444H7.71429L0 20.4444V8L7.71429 0Z'
      fill='black'
    />
  </svg>
);
const Memo = memo(LogoIcon);
export { Memo as LogoIcon };
