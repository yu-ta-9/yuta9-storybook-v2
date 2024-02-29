import { format } from '@formkit/tempo';

export const formatYYYYMMDD = (date: Date): string => {
  return format(date, 'YYYY/MM/DD');
};
