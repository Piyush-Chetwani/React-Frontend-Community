// eslint-disable-next-line
export const emailValidation = (email) => {
  const regex = /^(?=[A-Za-z0-9][A-Za-z0-9@._%+-]{5,253}$)[A-Za-z0-9._%+-]{1,64}@(?:(?=[A-Za-z0-9-]{1,63}\.)[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*\.){1,8}[A-Za-z]{2,5}$/;
  const res = regex.test(email);
  return res;
};
export const phoneValidation = (phone) => {
  const regex = /^([0|\+[0-9]{1,5})?([6-9][0-9]{9})$/;
  const res = regex.test(phone);
  return res;
};
