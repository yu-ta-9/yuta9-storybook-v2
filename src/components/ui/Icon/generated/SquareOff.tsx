import type { SVGProps } from 'react';
const SvgSquareOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='square-off_svg__icon square-off_svg__icon-tabler square-off_svg__icons-tabler-outline square-off_svg__icon-tabler-square-off'
    viewBox='0 0 24 24'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M8 4h10a2 2 0 0 1 2 2v10m-.584 3.412A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.552.224-1.052.586-1.414M3 3l18 18' />
  </svg>
);
export default SvgSquareOff;
