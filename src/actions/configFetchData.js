const SET_CATEGORY='SET_CATEGORY';
const SET_DATE_FROM='SET_DATE_FROM';
const SET_DATE_TO='SET_DATE_TO';
const SORT_BY='SORT_BY';

export const setCategory = (payload)=>{
  return {type:SET_CATEGORY,payload}
}
export const setDateFrom = (payload)=>{
  return {type:SET_DATE_FROM,payload}
}

export const setDateTo = (payload)=>{
  return {type:SET_DATE_TO,payload}
}

export const sortBy = (payload)=>{
  return {type:SORT_BY,payload}
}

