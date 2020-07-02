import format from 'date-fns/format';

/**
 * Получение времени на основе даты в формате YYYY-MM-DD
 * @param {Number} date - Дата в unix формате
 * @return {String} Дата события в формате YYYY-MM-DD
 */
export const formatReverseDate = (date) => {
  return format(date, `yyyy-MM-dd`);
};

/**
 * Получение времени на основе даты в формате MMMM DD YYYY
 * (полное название месяца и дата, год)
 * @param {Number} date - Дата в unix формате
 * @return {String} Дата события в формате MMMM DD YYYY
 */
export const formatMonthDay = (date) => {
  return format(date, `MMMM dd, yyyy`);
};
