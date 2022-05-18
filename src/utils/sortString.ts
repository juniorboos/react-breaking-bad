const sortString = (a: string, b: string, type: 'asc' | 'desc') =>
   type === 'asc' ? (a > b ? 1 : -1) : a > b ? -1 : 1;

export { sortString };
