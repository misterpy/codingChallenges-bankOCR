export const detect: Function = (data: string[]): string => {
  if (!data || data.length < 9) {
    throw Error('Invalid payload');
  }

  const validCharacters: string[] = ['', '_', 'I'];
  if (data.some(char => !validCharacters.includes(char))) {
    throw Error('Invalid character');
  }

  return '';
};
