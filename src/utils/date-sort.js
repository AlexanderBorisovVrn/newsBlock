export function dateSort(sortArray, sortParams, isSorted) {
  let f = (el) => new Date(el[sortParams]).getTime();
  return isSorted
    ? sortArray.sort((a, b) => f(a) - f(b))
    : sortArray
}

