export const splitArray = () => {
  // logic goes here
};

export const generateRandomNumber = () => {
  return Math.floor(Math
      .random() * (999999 - 100000 + 1)) + 100000;
};

export const timeDifference = (startDate:Date) => {
  const endDate = new Date();
  const seconds = (endDate.getTime() - startDate.getTime()) / 1000;
  return seconds;
};
