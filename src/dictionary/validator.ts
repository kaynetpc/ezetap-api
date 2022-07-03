// validate supplied id
const hex = /[0-9A-Fa-f]{6}/g;

export const isIdValid = (id: any): boolean => hex.test(id);
