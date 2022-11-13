export const PHONE_REGEXP =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/g;
export const MAIL_REGEXP = /(\w+\.?|-?\w+?)+@\w+\.?-?\w+?(\.\w{2,3})+/g;
export const CITY_REGEXP = new RegExp(
  `^\s*[a-zA-Z]{1}[0-9a-zA-Z][0-9a-zA-Z '-.=#/]*$`
);
export const ZIP_CODE_REGEXP = /^[a-zA-Z0-9]{0,10}$/;
