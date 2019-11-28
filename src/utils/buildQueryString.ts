export function buildQueryString(obj: any) {
  const query = obj.toJS ? obj.toJS() : obj;

  const queryString = Object.keys(query).reduce((prev: string, currentKey: string) => {
    return `${prev}${currentKey}=${query[currentKey]}&`;
  }, "?");

  return queryString.toLowerCase().replace(/&$/, "");
}
