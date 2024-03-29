import type { SVGProps } from 'react';
const SvgTooltip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1em'
    height='1em'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth={2}
    className='tooltip_svg__icon tooltip_svg__icon-tabler tooltip_svg__icon-tabler-tooltip'
    viewBox='0 0 24 24'
    {...props}
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <circle cx={12} cy={18} r={2} />
    <path d='m12 13-1.707-1.707A1 1 0 0 0 9.586 11H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-2.586a1 1 0 0 0-.707.293z' />
  </svg>
);
export default SvgTooltip;
