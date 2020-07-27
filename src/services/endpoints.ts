import apiDataBase from "./api";

export function fetchElementByTitle( title: string ) {
  return apiDataBase.get(`/search/${ encodeURI(title) }`)
}
