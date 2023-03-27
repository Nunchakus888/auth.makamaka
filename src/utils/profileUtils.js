// todo 防抖操作
export const debounce = (fn, ms = 200)=> {
  let timeoutId;
  return function (e) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, arguments);
    }, ms);
  };
};
