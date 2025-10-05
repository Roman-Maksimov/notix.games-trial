export const pluralize = (
  count: number,
  many: string,
  one: string,
  few: string,
) => {
  // Русские правила склонения
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  // Исключения для чисел от 11 до 19
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }

  // Для чисел, оканчивающихся на 1 (кроме 11)
  if (lastDigit === 1) {
    return one;
  }

  // Для чисел, оканчивающихся на 2, 3, 4 (кроме 12, 13, 14)
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }

  // Для всех остальных случаев (0, 5-9, 11-19)
  return many;
};
