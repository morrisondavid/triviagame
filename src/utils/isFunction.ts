const isFunction = (object: any): boolean => {
  return object && {}.toString.call(object) === "[object Function]";
};

export default isFunction;
