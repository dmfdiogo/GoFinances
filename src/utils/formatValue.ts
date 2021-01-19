const formatter = new Intl.NumberFormat([], {
  style: 'currency',
  currency: 'BRL',
});

const formatValue = (value: number): string => formatter.format(value);

export default formatValue;
