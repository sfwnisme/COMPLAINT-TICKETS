// function reversBoolean(boolean: boolean, callback) {
//   return callback(!boolean)
// }

export const fetchDataWithDelay = (data, delay = 2000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};