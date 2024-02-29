import type { SVGProps } from 'react';
const SvgChevronUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='chevron-up_svg__icon chevron-up_svg__icon-tabler chevron-up_svg__icon-tabler-chevron-up'
    viewBox='0 0 24 24'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='m6 15 6-6 6 6' />
  </svg>
);
export default SvgChevronUp;
