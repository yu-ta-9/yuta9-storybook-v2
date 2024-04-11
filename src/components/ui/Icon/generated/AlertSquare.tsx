import type { SVGProps } from 'react';
const SvgAlertSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='alert-square_svg__icon alert-square_svg__icon-tabler alert-square_svg__icons-tabler-outline alert-square_svg__icon-tabler-alert-square'
    viewBox='0 0 24 24'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM12 8v4M12 16h.01' />
  </svg>
);
export default SvgAlertSquare;
