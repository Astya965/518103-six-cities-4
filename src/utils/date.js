import moment from "moment";

/**
 * Получение времени на основе даты в формате YYYY-MM-DD
 * @param {Number} date - Дата в unix формате
 * @return {String} Дата события в формате YYYY-MM-DD
 */
export const formatReverseDate = (date) => {
  return moment(date).format(`YYYY-MM-DD`);
};

/**
 * Получение времени на основе даты в формате MMMM DD (полное название месяца и дата)
 * @param {Number} date - Дата в unix формате
 * @return {String} Дата события в формате MMMM DD
 */
export const formatMonthDay = (date) => {
  return moment(date).format(`MMMM DD`);
};
