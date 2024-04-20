import type { SVGProps } from 'react';
const SvgSquareMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='square-minus_svg__icon square-minus_svg__icon-tabler square-minus_svg__icons-tabler-outline square-minus_svg__icon-tabler-square-minus'
    viewBox='0 0 24 24'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10M16 19h6' />
  </svg>
);
export default SvgSquareMinus;
