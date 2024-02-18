export const currencyDictionary: Record<string, string> = {
  ARS: 'es-AR',
};

export const conditionDictionary: Record<string, string> = {
  new: 'Nuevo',
};

export const calculatePrice = (value: number, code: string) => {
  const formatter = new Intl.NumberFormat(currencyDictionary[code]);
  return formatter.format(value);
};
